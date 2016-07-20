<?php
namespace TwitterPlugin\field;

class Button extends \Enact\template\wrapper\BaseFieldWrapper {



    public function __construct($field){

        $field['field_value'] = json_decode($field['field_value'],true);
        $this->field = $field;

    }//__construct


    public function __toString(){
        return $this->getButtonHtml();
    }//__toString



    public function getButtonHtml($options = Array()){

        if(!$this->field['field_value']['show_button']){
            return '';
        }//if

        \TwitterPlugin::instance()->includeWidgetJavascript();

        $options = array_merge($this->field['field_value']['atts'], $options);

        $actual = Array();
        foreach($options as $k => $v){
            $actual['data-' . $k] = $v;
        }//foreach 

        $actual['class'] = 'twitter-share-button';

        return \Html::a($actual,'Tweet');

    }//getButtonHtml



}//Button

