// define blocks
'use strict';


//block สำหรับ config ขาของ led rgb
Blockly.Blocks['led_rgb_config'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("LED RGB Configulation");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("https://cu.lnwfile.com/_/cu/_raw/91/av/mp.png", 150, 150, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RED")
            .appendField(new Blockly.FieldDropdown([
                ["0", "0"],
                ["1", "1"],
                ["2", "2"]
            ]), "R_PIN")
            .appendField("GREEN")
            .appendField(new Blockly.FieldDropdown([
                ["0", "0"],
                ["1", "1"],
                ["2", "2"]
            ]), "G_PIN")
            .appendField("BLUE")
            .appendField(new Blockly.FieldDropdown([
                ["0", "0"],
                ["1", "1"],
                ["2", "2"]
            ]), "B_PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};