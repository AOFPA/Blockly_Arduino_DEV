/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.base');

goog.require('Blockly.Arduino');

Blockly.Arduino.inout_buildin_led = function() {
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
    var code = 'digitalWrite(13, ' + dropdown_stat + ');\n';
    return code;
};

Blockly.Arduino.inout_digital_write = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
    return code;
};

Blockly.Arduino.inout_digital_write_validator = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
    return code;
};

Blockly.Arduino.inout_PWM_write = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino.inout_PWM_write_validator = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino.inout_digital_read = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_digital_read_validator = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_write = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino.inout_analog_write_validator = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino.inout_analog_read = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_read_validator = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_onoff = function() {
    // Boolean values HIGH and LOW. 
    var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_angle = function() {
    // Just angle
    var angle = this.getFieldValue('ANGLE');
    // TODO: Change ORDER_NONE to the correct strength.
    return [angle, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_angle_maths = function() {
    // Just angle
    var angle = this.getFieldValue('ANGLE');
    // TODO: Change ORDER_NONE to the correct strength.
    return [angle, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.tone = function() {
    var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + value_pin] = 'pinMode(' + value_pin + ', OUTPUT);';
    var code = 'tone(' + value_pin + ',' + value_num + ',' + value_tps + ');\n';
    return code;
};

Blockly.Arduino.notone = function() {
    var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output' + value_pin] = 'pinMode(' + value_pin + ', OUTPUT);';
    var code = 'noTone(' + value_pin + ');\n';
    return code;
};

Blockly.Arduino.inout_pulsein = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'pulseIn(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_pulsein_timeout = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = this.getTitleValue('STAT');
    var timeout = Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'pulseIn(' + dropdown_pin + ', ' + dropdown_stat + ', ' + timeout + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.inout_attachInterrupt = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_mode = this.getFieldValue('mode');
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var interrupt_pin = 'digitalPinToInterrupt(' + dropdown_pin + ')';
    var code = 'attachInterrupt' + '(' + interrupt_pin + ',' + 'attachInterrupt_' + dropdown_pin + ',' + dropdown_mode + ');\n'
    var funcName = 'attachInterrupt_' + dropdown_pin;
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var code2 = 'void' + ' ' + funcName + '() {\n' + branch + '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
    return code;
};

Blockly.Arduino.inout_detachInterrupt = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var interrupt_pin = 'digitalPinToInterrupt(' + dropdown_pin + ')';
    var code = 'detachInterrupt' + '(' + interrupt_pin + ');\n'
    return code;
};