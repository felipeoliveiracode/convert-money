const btnConvert = document.getElementById("btn-convert");
const selectConvert = document.querySelector(".convert-select");

function convertCurrency() {
    // URL da API para cotação do dólar
const url = `https://economia.awesomeapi.com.br/json/last/${selectConvert.value}-BRL`;

// Fazendo a requisição para a API
fetch(url)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {

        const currencyKey = `${selectConvert.value}BRL`;

        // Acessa os dados da cotação do dólar
        const currency = data[currencyKey];
        const currencyToday = `${currency.bid}`;


        const inputValueToConvert = document.querySelector(".value-to-convert").value;
        const currencyToConvert = document.getElementById("currency-to-convert");
        const convertedCurrency = document.getElementById("converted-currency");
    
        currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValueToConvert);

        switch (selectConvert.value) {
            case "USD":
    
                convertedCurrency.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(inputValueToConvert / currencyToday);
                break;
    
            case "EUR":
    
                convertedCurrency.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(inputValueToConvert / currencyToday);
                break;
    
            case "GBP":
    
                convertedCurrency.innerHTML = new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(inputValueToConvert / currencyToday);
                break;
    
            case "BTC":
    
                convertedCurrency.innerHTML = (inputValueToConvert / currencyToday).toFixed(2);
                break;
            }
    
    })
    .catch(error => {
        // Mostra erros, caso aconteçam
        console.error('Erro ao acessar a API:', error);
    });

    }


function changeImage() {
    const currencyImage = document.querySelector(".img-currency");
    const nameConvertedCurrency = document.querySelector(".currency-name-converted");

    switch (selectConvert.value) {

        case "USD":
            currencyImage.src = "./assets/dolar.png";
            nameConvertedCurrency.innerHTML = "Dólar";
            break;

        case "EUR":
            currencyImage.src = "./assets/euro.png";
            nameConvertedCurrency.innerHTML = "Euro";
            break;

        case "GBP":
            currencyImage.src = "./assets/libra.png";
            nameConvertedCurrency.innerHTML = "Libra";
            break

        case "BTC":
            currencyImage.src = "./assets/btc.png";
            nameConvertedCurrency.innerHTML = "Bitcoin";
            break
    }
    convertCurrency();
}


selectConvert.addEventListener("change", changeImage)
btnConvert.addEventListener("click", convertCurrency);
