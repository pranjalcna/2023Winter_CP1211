function convert() {
    let tempInCelcius = parseFloat(document.querySelector("#cel-temp").value);
    tempInFahr = (tempInCelcius * 1.8) + 32;
    document.querySelector('#result').innerHTML = `${tempInCelcius}℃ = ${tempInFahr}℉`;
}