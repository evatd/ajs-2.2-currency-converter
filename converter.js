// Solution: VERSION 1: "RATES" defined as a global variable.
// As it is global, function code can access it (e.g. RATES.eur), see if statement, where you link the two

// Process: Get a reference to the form button and define rate objects here
// Define them one after another to avoid writing var twice
var button = document.getElementById("converter-action");
    RATES = {
    eur: 1.27,
    usd: 1.47,
    yen: 155.62
};
// Event listener for when the button is clicked...
button.addEventListener(
    "click",
    function () {
        // Call the convert function (see code below)
        convert();
    }
);

/**
 * Currency convertor function
 * This function is executed when the form button is clicked (see listener above)
 * Lots of hard-coded values and element names here... not good practice!
 */
function convert() {

    var currency,
        originalAmountValue,
        convertedCurrency,
        currencyChoice = document.getElementById("converter-currency"),
        converterInput = document.getElementById("converter-input"),
        originalAmount = document.getElementById("original-amount"),
        resultAmount = document.getElementById("result-amount");

    originalAmountValue = converterInput.value;
    currency = currencyChoice.value;

    if (currency === "eur") {
        convertedCurrency = originalAmountValue * RATES.eur;
    } else if (currency === "usd") {
        convertedCurrency = originalAmountValue * RATES.usd;
    } else if (currency === "yen") {
        convertedCurrency = originalAmountValue * RATES.yen;
    }

    originalAmount.textContent = originalAmountValue;
    resultAmount.textContent = convertedCurrency + " " + currency;

}


