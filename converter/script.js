const converter = document.querySelector(".parent").dataset.converter;

const inputField = document.querySelector("#inputfield");
const resultField = document.querySelectorAll(".inputsection input")[1];

const buttons = document.querySelectorAll(".convert-btn");

const convertBtn = buttons[0];
const clearBtn = buttons[1];
const copyBtn = buttons[2];


// ==================== CONVERT ====================

convertBtn.addEventListener("click", function () {

    const input = inputField.value.trim();

    // Empty input
    if (input === "") {
        resultField.value = "Please enter a valid value";
        return;
    }

    // Non-numeric input
    if (isNaN(input)) {
        resultField.value = "Please enter a valid numeric value";
        return;
    }

    const value = Number(input);
    let result;


    switch (converter) {

        // 1. Meter → Feet
        case "meter-feet":
            result = value * 3.28084;
            resultField.value = result.toFixed(4) + " feet";
            break;


        // 2. Kilometer → Mile
        case "km-mile":
            result = value * 0.621371;
            resultField.value = result.toFixed(4) + " miles";
            break;


        // 3. Inch → Centimeter
        case "inch-cm":
            result = value * 2.54;
            resultField.value = result.toFixed(4) + " cm";
            break;


        // 4. Kilogram → Pound
        case "kg-pound":
            result = value * 2.20462;
            resultField.value = result.toFixed(4) + " pounds";
            break;


        // 5. Gram → Kilogram
        case "gram-kg":
            result = value / 1000;
            resultField.value = result.toFixed(4) + " kg";
            break;


        // 6. Celsius → Fahrenheit
        case "celsius-fahrenheit":
            result = (value * 9 / 5) + 32;
            resultField.value = result.toFixed(2) + " °F";
            break;


        // 7. Fahrenheit → Celsius
        case "fahrenheit-celsius":
            result = (value - 32) * 5 / 9;
            resultField.value = result.toFixed(2) + " °C";
            break;


        // 8. Celsius → Kelvin
        case "celsius-kelvin":
            result = value + 273.15;
            resultField.value = result.toFixed(2) + " K";
            break;


        // 9. Liter → Milliliter
        case "liter-ml":
            result = value * 1000;
            resultField.value = result.toFixed(4) + " ml";
            break;


        // 10. Liter → Gallon
        case "liter-gallon":
            result = value * 0.264172;
            resultField.value = result.toFixed(4) + " gallons";
            break;


        // 11. Milliliter → Liter
        case "ml-liter":
            result = value / 1000;
            resultField.value = result.toFixed(4) + " liters";
            break;


        // 12. KB → MB
        case "kb-mb":
            result = value / 1024;
            resultField.value = result.toFixed(4) + " MB";
            break;


        // 13. MB → GB
        case "mb-gb":
            result = value / 1024;
            resultField.value = result.toFixed(4) + " GB";
            break;


        // 14. GB → TB
        case "gb-tb":
            result = value / 1024;
            resultField.value = result.toFixed(4) + " TB";
            break;


        // 15. Seconds → Minutes
        case "seconds-minutes":
            result = value / 60;
            resultField.value = result.toFixed(4) + " minutes";
            break;


        // 16. Minutes → Hours
        case "minutes-hours":
            result = value / 60;
            resultField.value = result.toFixed(4) + " hours";
            break;


        // 17. Hours → Days
        case "hours-days":
            result = value / 24;
            resultField.value = result.toFixed(4) + " days";
            break;


        // 18. KW → HP
        case "kw-hp":
            result = value * 1.34102;
            resultField.value = result.toFixed(4) + " HP";
            break;


        // 19. Mbps → km/h
        case "mbps-kmph":
            result = value * 0.125 * 3.6;
            resultField.value = result.toFixed(4) + " km/h";
            break;


        // Unknown converter
        default:
            resultField.value = "Invalid converter";
    }

});


// ==================== CLEAR ====================

clearBtn.addEventListener("click", function () {

    inputField.value = "";
    resultField.value = "";

});


// ==================== COPY ====================

copyBtn.addEventListener("click", function () {

    if (resultField.value.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(resultField.value);

});