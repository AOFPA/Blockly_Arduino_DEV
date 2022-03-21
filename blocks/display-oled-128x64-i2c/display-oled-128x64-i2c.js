﻿// define blocks
'use strict';

Blockly.Blocks['lp2i_u8g_draw_string'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_draw_string)
            .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendValueInput("Text", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_string_Text);
        this.appendValueInput("X", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_string_X);
        this.appendValueInput("Y", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_string_Y);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#1B2944");
        this.setTooltip('');
        this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
    }
};
//aofpa
Blockly.Blocks['led_v2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("led pin")
            .appendField(new Blockly.FieldImage("https://c.tenor.com/6MsukwHKJ58AAAAM/ara-anime.gif", 50, 50, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("Text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['led_aofpa'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LED_AOFPA")
            .appendField(new Blockly.FieldImage("https://cf.shopee.co.th/file/211307a8d8e137784a1ba3b13056d51a", 150, 150, { alt: "*", flipRtl: "FALSE" }))
        this.appendValueInput("Text", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("a");
        this.appendValueInput("X", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B");
        this.appendValueInput("Y", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("C");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#1B2944");
        this.setTooltip('');
        this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
    }
};


Blockly.Blocks['lp2i_u8g_draw_4strings'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings)
            .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display);
        this.appendValueInput("Text_line1", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1);
        this.appendValueInput("Text_line2", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2);
        this.appendValueInput("Text_line3", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3);
        this.appendValueInput("Text_line4", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#1B2944");
        this.setTooltip('');
        this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
    }
};
Blockly.Blocks['lp2i_u8g_print'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_print)
            .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendValueInput("N", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_print_N);
        this.appendValueInput("X", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_print_X);
        this.appendValueInput("Y", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_print_Y);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#1B2944");
        this.setTooltip('');
        this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
    }
};

Blockly.Blocks['lp2i_u8g_4draw_print'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print)
            .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendDummyInput()
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_to_display);
        this.appendValueInput("Text_line1", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line1);
        this.appendValueInput("N1", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N1);
        this.appendValueInput("Text_line2", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line2);
        this.appendValueInput("N2", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N2);
        this.appendValueInput("Text_line3", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line3);
        this.appendValueInput("N3", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N3);
        this.appendValueInput("Text_line4", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line4);
        this.appendValueInput("N4", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#1B2944");
        this.setTooltip('');
        this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
    }
};