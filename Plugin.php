<?php
class TwitterPlugin extends \Enact\Plugin {


    private static $included_embed = false;


    public function name(){
        return 'Twitter';
    }//name



    public function creator(){
        return 'WebYoke';
    }//creator


    public function website(){
        return 'http://webyoke.com';
    }//website


    public function version(){
        return 1.0;
    }//version


    public function githubLink(){
        return 'https://github.com/webyoke/enact-cms-twitter-plugin';
    }//githubLink


    public function onBoot(){
        require 'vendor/autoload.php';
    }//onBoot



    public function templatePath(){
        return 'app/template';
    }//templatePath



    public function Template(){
        return new \TwitterPlugin\Template;
    }//template


    public function fields(){

        return Array(
            new \TwitterPlugin\field\TweetDefinition,
            new \TwitterPlugin\field\ButtonDefinition,
        );

    }//fields



    public function includeWidgetJavascript(){

        if(!self::$included_embed){
            self::$included_embed = true;
            \View::headExtra('<script async defer id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>');
        }//if

    }//includeWidgetJavascript



}//TwitterPlugin

return new TwitterPlugin;
