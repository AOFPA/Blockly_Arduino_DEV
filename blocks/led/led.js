// define blocks
'use strict';

//led ปกติ กำหนด pin และ HIGH / LOW
Blockly.Blocks['led'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://cdn-icons-png.flaticon.com/512/651/651902.png", 100, 100, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin =")
            .appendField(new Blockly.FieldDropdown([
                ["D1", "D1"],
                ["D2", "D2"],
                ["D3", "D3"]
            ]), "pin");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("state =")
            .appendField(new Blockly.FieldDropdown([
                ["ON", "HIGH"],
                ["OFF", "LOW"]
            ]), "state");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


//led blink
Blockly.Blocks['led_blink'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LED BLINK");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://www.budgetronics.eu/data/articles/images/small/s_357.gif?version=pv07L", 100, 100, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin =")
            .appendField(new Blockly.FieldDropdown([
                ["0", "0"],
                ["1", "1"],
                ["2", "2"]
            ]), "pin");
        this.appendValueInput("delay")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("blink(ms) =");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};