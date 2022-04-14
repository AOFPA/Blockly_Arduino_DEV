// define blocks
'use strict';

//Block เอาไว้กำหนดขา แล้วค่าตัว R
Blockly.Blocks['ntc_config'] = {
    init: function() {
        this.appendValueInput("R_NTC")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8AAADhJRvhCQDZ2dn29vYiIiLgGQvgFwfhIhfhHxPgDAD75uX87OvshIDpdHD30dD98/L6397jNi7mV1LnYV3lTUfzsa/iKiDo6Ojw8PCvr69ubm7U1NTNzc2CgoLrfHhfX1+hoaHtjIg3Nzfi4uK5ubmNjY1KSkonJycTExN7e3vBwcHsh4TwoZ4mJiZAQEBZWVkxMTFycnLkQzz2w8HpamXztrT3zcsQEBDvl5TlRz/pbmnwm5iYmJjxp6Qcd4ZCAAAIeElEQVR4nO2deV/iPBDHC+Fs8eBQuURAEDzWVRSvdfH9v6tHpGnTZpLGyFMm3Xz/LG0/8yPJTM6O41gsFovFYrFYLBaLBQHFTm82WpReS5P+7KK7a2u2T2E2ybHMx51dm7RVBvc5nofsaOyOAH1rznZt2Za4EOj75PJ018Ztg2uxwE96uzbv50AtkGW2awN/Citw1Buso0RnsJpnR2I/EFJasa6zcJaRijoOS6oY+6kTlq7B7mZKNbwOgF8D+VepG7Y1aDdmAcf2GyrR2LjYoyUo6rwEEqep2rU9FontjFbUhxSt2iK0L7OS3EPdjZldVN/6heyeqcK/gJauUrh72Nx0l5JRW8X3M1fxQBjl1P8fTBwS+z3u64TbLs3t2Pie9Cbhtpm5vVPF6ud73HkqNm2Voq8w6b7C5rZSGjZtlync56zXYxe6iv8EPsCyaRw028dvEZGqZY0PSOHSq1Srrve4x1zLlMIGqebXVFrMxUwpHFbyG8hheDFTCttVX6F3G17MlEKSpwrPw4tWIV6sQopViBd9hTWQ1AxXRlfh3lPFg3h8SdF4JWQKKxKFfzwaNaO4XiNF61XQVLgkoL51wf9K03wFNBU+eyKF5YM0zVdAU2FDXIa3Di502+GQuCDeY3zsvGt0FTofrWOIX9gEyhUyTiObEd8qNAOrkGIV4sUqpHAKX/YPID7SM10RXYUfpFKGIEcpGq+EpsI6gQdP+TzBVopShfvhReXRk1ljC7HCQ6FC9iEUaCp0mmVYYJVdCkCBrsLaHwLinqRovBK6Cj8rKgi6wdMPFJqCVUixCvFiFVIyqnAYXgQU1iFSMvsbaJfh22MT4gnd6pOuwiFxqxCVNrsLBwOatbQmntV/S9F6FWQKy8PwYjZHTxKFkpUZZikABZoKnXcPbIbVsmtSO5QpdH412xAtbEvA+gqd+h6AYfFQrtAUrEKKVYgXq5DyDyqsL08AntGFQ22Fh00C7mvz/qZnuxq6CvMu3C2tkmV6xiuhqfBFvG7BPIQCqUJmIKQ+ehqmaL0Kmgol64fPaZqvgKZCZ+l5FQCPDNOzXQ1dhU7t7z7AOTY/8wOFxmAVUqxCvFiFFKsQL9oKn49aEOfoZtt0Fb6Rcgb26ksU7mXjvIXe2MKolRmxQsnKjEnnnmTtsJWJs2syhfWncgbOH8rjYa0BkZrhytiIT7EK8WIVUqxCvOgrBINFA1u/W1/hXssDd7K3sU0Iayv8Iziu7hp1GkGiUHyixDPpRMk/PXoSj4CNOtkla4e38CxGmRynaLwS2tFieXAE8IRukdtG/ACrEC9WISWjCofhRasQL1YhxVyFg6wrpIkRlM89mZb6KUiU85u5CCqkXzbP5S7SNvInhFly2NwcsMIw45w5X54vMumc2PwqsMJBeLMp+WZYgZEcQeC3TRzn5tU0iWEVvY+mDRAodLrhE0ZU1DBN1zj2i0ih46yCZwzIcxGm6eIyW4BfFdwQ5EXCn8DrNDC1wP0mURj6m9/yrC27ZyEWCH9llxJI7P//Rv6EINIDidZqwWx2+R1YhQhSXSblbdkpQSo5zmE0zh+ZmdCy1/rgDr0G7iYdW/Wgbj+eZezwyfOiJ0VcL8/tVKNPI05vRdtSLPVK/Z0AH3+qel5sFpsmZEGc/Il2ZqKN8MWt8Pq+NJKjaDHSZHto434B9IYfgk1OX2GjGd0nc7d5QQlrxKB5cSPZDG+Fh2C+mmM+8kEPGviRDqSKUBE+C9eSfIlupKL6hYg00RwNaGysb0iq6IZyC3oHznyIo41xE/baseA0IUN0Z6yvMN5pxwEQ7D8S6uiaaoWN/deIqykNhowfrCfW0a9CHMrfgoYx/+9/CNMARCCMs6HuCkogvGvu+WjdVCnCWEsc4W2I/pwZMzI4VCvCvNtkXjODeg0o6Lxyfv5NUWGe3cKNN+Oj32W7YnrNreRQ4StkdnT5A7AFPldT4BxNXbEZRmemOvw/hQS/SzkKrzRUK2neZb5k3b0COrco6PEKFcK9r5DZDVS8RK6Q8YHizyNwCh/DVlec8L1bHPAKl8q1tMqcSzNK4TfKkFGItpYCnkarHXZLWBWecpFaz5f60eIV3wjRj4eXoc/YayvHw2H4nin3Hiz4/z07E6gw/N3gMd9bv0Hba6MrFowP3BfMIvIKmX7pimvPaJhzwx7VcFFtM6/p84MwLPjDHnZCv6zWECOLbTluEIYGvwG9MpcUqylhKimdVcbnSkNXwzREtYjosvOJ/lxIPOk8Di75FnSgUojkhX8Jzk0ZK/7vr1WSW2LliXmALkBibIZhE2Knyf4m1tNqmV25oGvIaduuyAIIZS1B2piwjrLZVYr+8Pc6ZctVoRtN2IFPvS3v2ETPa9E3YN1yQr1pZI27JpVIIse1iv64AuWc/hcPQCE6taa4a0OiJ+7oXgW8G6Oor4l2m+tPgkVSN3Ycja7jX+EbVwT04UI4aQJLNC6Jf4R8hL4Iw5YY73TVb9sk0kmteqQV/04g3aeAsz9DoUv53PCuvjzwCPHWmf88zyPNc+5Ub7DbCGe0p1BvCEa0xvJ2/+B9eH6yBJIA0BkolCNDlmAb5XeXx4KNxRhHFRFoPf2mvxjpPbYTSjq2BgIRrhtyBP5UfSaieEcfufw/Ldsa4Y7mvlroLvymDyCcJQXpBRIXKl3ocGc42h43B2NzfKcpR2FioMCIxNxYVlWn/ZyRAplN25+UzkSrLANWXwnfepqU0xzLfMyLHJwt2Fsm+BbuEyje56LMV73BtFMsdjuFm/FsEvsV67yFlHFOmRLu3raQzkhR4AzxkDeBwV2yvNwI33LvdxjME/T1zda3pjBbCOXNV4Z00xIonq6gkhwBIcRkTnur0V1pvYHx9XLeH19kS53FYrFYLBaLxWL5d/gPZ/uzEor8HFAAAAAASUVORK5CYII=", 100, 100, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PIN=GPIO")
            .appendField(new Blockly.FieldDropdown([
                ["36", "36"],
                ["37", "37"],
                ["38", "38"],
                ["39", "39"],
                ["32", "32"],
                ["33", "33"],
                ["34", "34"],
                ["35", "35"],
                ["4", "4"],
                ["0", "0"],
                ["2", "2"],
                ["15", "15"],
                ["13", "13"],
                ["12", "12"],
                ["14", "14"],
                ["27", "27"],
                ["25", "25"],
                ["26", "26"]
            ]), "pin")
            .appendField("Register NTC (Ω)=");
        this.appendValueInput("R")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Register(Ω)=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Block แสดงค่าองศงเซลเซียส
Blockly.Blocks['ntc_showTemp'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://cdn-icons-png.flaticon.com/512/1247/1247135.png?w=740", 50, 50, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Show ")
            .appendField(new Blockly.FieldDropdown([
                ["Celsius", "Celsius"],
                ["Kelvin", "Kelvin"],
                ["Fahrenheit", "Fahrenheit"]
            ]), "unit");
        this.appendValueInput("text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Text to Serial Minitor =");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};