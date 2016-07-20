<?php
namespace TwitterPlugin\field;

class Tweet extends \Enact\template\wrapper\BaseFieldWrapper {


    private $tweet;


    public function __construct($field){

        $this->field = $field;

        $tweet = $this->field['field_value'];

        if(!$tweet){
            $tweet = new stdClass;
        } else {
            $tweet = json_decode($tweet);
        }//el
        
        $this->tweet = $tweet;


    }//__construct



    public function __toString(){
        return $this->getTweetHtml();
    }//__toString



    public function getTweetProperty($prop){

        if(!$this->tweet->options || !property_exists($this->tweet->options,$prop)){
            return '';
        }//if

        return $this->tweet->options->{$prop};

    }//getTweetProperty



    public function getTweetHtml($options = Array()){

        if(!$this->tweet->value){
            return '';
        }//if

        \TwitterPlugin::instance()->includeWidgetJavascript();

        $html = $this->getTweetProperty('html');

        if(count($options)){
            $atts = '';
            foreach($options as $k => $v){
                $atts .= "data-{$k}=\"{$v}\" ";
            }//foreach

            $html = str_replace('<blockquote ',"<blockquote {$atts} ",$html);

        }//if

        return $html;

    }//getTweetHtml



}//Tweet
