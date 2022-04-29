Blockly.Arduino.led_rgb_config = function(block) {
    var r_pin = block.getFieldValue('R_PIN');
    var g_pin = block.getFieldValue('G_PIN');
    var b_pin = block.getFieldValue('B_PIN');
    // TODO: Assemble JavaScript into code variable.

    // define
    //#define R_PIN 0
    Blockly.Arduino.definitions_['define_led_rgb'] =
        '#define R_PIN ' + r_pin + '\n' +
        '#define G_PIN ' + g_pin + '\n' +
        '#define B_PIN ' + b_pin + '\n';

    //void setup
    Blockly.Arduino.setups_['setup_led_rgb'] =
        'pinMode(R_PIN,OUTPUT);\n' +
        'pinMode(G_PIN,OUTPUT);\n' +
        'pinMode(B_PIN,OUTPUT);\n';

    // void loop()
    var code = '//White LED \n';
    code += 'analogWrite(R_PIN, 255);\n';
    code += 'analogWrite(G_PIN, 255);\n';
    code += 'analogWrite(B_PIN, 255);\n';



    return code;
};


/*
analogWrite(R, 255);
analogWrite(G, 255);
analogWrite(B, 255);
*/


// define
// #define R_PIN 0

// void setup()
// pinMode(R_PIN,OUTPUT)

// void loop()
// digitalWrite(R_PIN,HIGH)