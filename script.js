const btnConvert = document.getElementById("btn-convert");
const selectConvert = document.querySelector(".convert-select");

function convertCurrency() {
    const inputValueToConvert = document.querySelector(".value-to-convert").value;
    const currencyToConvert = document.getElementById("currency-to-convert");
    const convertedCurrency = document.getElementById("converted-currency");

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValueToConvert);

    switch (selectConvert.value) {
        case "dolar":
            const dolarToday = 6;

            convertedCurrency.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputValueToConvert / dolarToday);
            break;

        case "euro":
            const euroToday = 6.25;

            convertedCurrency.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputValueToConvert / euroToday);
            break;

        case "libra":
            const libraToday = 7.45;

            convertedCurrency.innerHTML = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputValueToConvert / libraToday);
            break;

        case "btc":
            const btcToday = 576399;

            convertedCurrency.innerHTML = (inputValueToConvert / btcToday).toFixed(2);
        }

    }

// function changeImage() {
//     const currencyImage = document.querySelector(".img-currency");
//     const nameConvertedCurrency = document.querySelector(".currency-name-converted");

//     if (selectConvert.value == "dolar") {
//         currencyImage.src = "./assets/dolar.png"
//         nameConvertedCurrency.innerHTML = "Dólar"
//     };

//     if (selectConvert.value == "euro") {
//         currencyImage.src = "./assets/euro.png"
//         nameConvertedCurrency.innerHTML = "Euro"
//     };

//     convertCurrency();
// }

function changeImage() {
    const currencyImage = document.querySelector(".img-currency");
    const nameConvertedCurrency = document.querySelector(".currency-name-converted");

    switch (selectConvert.value) {

        case "dolar":
            currencyImage.src = "./assets/dolar.png";
            nameConvertedCurrency.innerHTML = "Dólar";
            break;

        case "euro":
            currencyImage.src = "./assets/euro.png";
            nameConvertedCurrency.innerHTML = "Euro";
            break;

        case "libra":
            currencyImage.src = "./assets/libra.png";
            nameConvertedCurrency.innerHTML = "Libra";
            break

        case "btc":
            currencyImage.src = "./assets/btc.png";
            nameConvertedCurrency.innerHTML = "Bitcoin";
            break
    }
    convertCurrency();
}


selectConvert.addEventListener("change", changeImage)
btnConvert.addEventListener("click", convertCurrency);