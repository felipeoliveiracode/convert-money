const btnConvert = document.getElementById("btn-convert");

function convertCurrency() {
    const inputValueToConvert = document.querySelector(".value-to-convert").value;
    const currencyToConvert = document.getElementById("currency-to-convert");
    const convertedCurrency = document.getElementById("converted-currency");
    const dolarToday = 6;

    convertDolar = inputValueToConvert / dolarToday;

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValueToConvert);
    convertedCurrency.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(convertDolar);

};

btnConvert.addEventListener("click", convertCurrency);