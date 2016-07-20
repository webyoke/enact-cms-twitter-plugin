<?php
namespace TwitterPlugin\field;

class ButtonDefinition {



    public function name(){
        return 'Tweet Button';
    }//name



    public function fieldAssets(){
        return Array(
            '/js/jsx/TweetButtonField.js',
            '/js/jsx/TweetButtonAttributes.js',
        );
    }//fieldAssets



    public function optionsAssets(){
        return Array(
            '/js/jsx/TweetButtonFieldOptions.js',
            '/js/jsx/TweetButtonAttributes.js',
        );
    }//fieldAssets



    public function fieldClass(){
        return 'TwitterPlugin\field\Button';
    }//fieldClass



}//ButtonDefinition
