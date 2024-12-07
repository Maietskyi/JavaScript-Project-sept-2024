// Оголошую змінну, яка є масивом і буде приймати введені Name=Value
let arrayNameValuePairs = [];

// Створюю функцію яка буде приймати введені Name=Value перетворювати їх в JSON формат і зберігати в LocalStorage

// Оголошую змінну і прив'язую до неї id кнопки запису add



let addButton = document.getElementById('addButton')
addButton.addEventListener("click", function () {
    const inputPair = document.getElementById("inputPair");
    const inputValueTrim = inputPair.value.trim();

    const [stringName, stringValue] = inputValueTrim.split("=").map(str => str.trim());

    function error (errorText){
        const textError = document.getElementById("textError")
        textError.innerText = errorText;
    }

    if (!stringName || !stringValue || inputValueTrim) {
        error("You entered an invalid format. Please enter 'Name=Value'");
        return;
    }
    // if (!stringValue) {
    //     const error = document.getElementById("error")
    //     error.style.display = "bloc";
    //     error.innerText = `You entered an invalid format. Please enter 'Name=Value'`;
    //     return;
    // }
    // if (!inputValueTrim) {
    //     const error = document.createElement("p")
    //     error.innerText = `You entered an invalid format. Please enter 'Name=Value'`;
    //     return;
    // }

    // function isValidPair(pair) {
    //     const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
    //     return regex.test(pair);
    // }


    arrayNameValuePairs.push({name: stringName, value: stringValue})
    inputPair.value = "";
    console.log(arrayNameValuePairs)


})









