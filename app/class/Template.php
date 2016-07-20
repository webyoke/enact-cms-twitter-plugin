<?php
namespace TwitterPlugin;

class Template {



    public function followButton($handle, $options = Array()){

        \TwitterPlugin::instance()->includeWidgetJavascript();

        $atts = Array(
            'class' => 'twitter-follow-button',
            'href'  => 'https://twitter.com/' . $handle,
        );

        foreach($options as $k => $opt){
            $atts['data-' . $k] = $opt;
        }//foreach

        return \Html::a($atts,"Follow @{$handle}");
       
    }//followButton


    public function timeline($handle, $options = Array()){

        \TwitterPlugin::instance()->includeWidgetJavascript();

        $atts = Array(
            'class' => 'twitter-timeline',
            'href'  => 'https://twitter.com/' . $handle,
        );

        foreach($options as $k => $opt){
            $atts['data-' . $k] = $opt;
        }//foreach

        return \Html::a($atts,"Tweets By @{$handle}");

    }//timeline



    public function tweetButton($options = Array()){
        $options = Array(
            'show_button'   => true,
            'atts'          => $options,
        );
        return (new \TwitterPlugin\field\Button(Array('field_value' => json_encode($options))));
    }//tweetButton



    public function embed($url){
        return new \TwitterPlugin\field\Tweet(Array('field_value' => $this->request($url)));
    }//embed



    private function request($url){

        $host = parse_url($url, PHP_URL_HOST);

        if(!$host || stripos($host,'twitter.com') === false){
            throw new \Exception('Twitter Plugin `embed` function must be passed a valid twitter URL');
        }//if

        $cache_key = 'Twitter Plugin Embed | ' . $url;

        $cache = \Cache::get($cache_key);

        if($cache !== null){
            return $cache;
        }//if

        $cache = file_get_contents('https://api.twitter.com/1/statuses/oembed.json?omit_script=true&url=' . $url);

        $cache = json_decode($cache);

        $cache = Array(
            'value' => $url,
            'options' => $cache
        );

        $cache = json_encode($cache);

        \Cache::set($cache_key,$cache);

        return $cache;

    }//request


}//Template
