<?php
namespace TwitterPlugin\field;

class TweetDefinition {



    public function name(){
        return 'Tweet';
    }//name



    public function fieldAssets(){
        return Array(
            '/js/jsx/TweetField.js'
        );
    }//fieldAssets



    public function optionsAssets(){
        return Array(
            '/js/jsx/TweetFieldOptions.js'
        );
    }//fieldAssets



    public function fieldClass(){
        return 'TwitterPlugin\field\Tweet';
    }//fieldClass



}//TweetDefinition
