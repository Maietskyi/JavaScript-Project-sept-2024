// Оголошую змінну, яка є масивом і буде приймати введені Name=Value
let arrayNameValuePairs = [];

// Оголошую змінну і прив'язую до неї id кнопки запису add

let addButton = document.getElementById('addButton')
addButton.addEventListener("click", function () {
    const inputPair = document.getElementById("inputPair");
    const inputValueTrim = inputPair.value.trim();

    const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
    if (!regex.test(inputValueTrim)) {
        error("!!!!!You entered an invalid format. Please enter 'Name=Value'");
        return;
    }

    const [stringName, stringValue] = inputValueTrim.split("=").map(str => str.trim());

    function error(errorText) {
        const textError = document.getElementById("textError")
        if (errorText) {
            textError.innerText = `${errorText}`;
        } else {
            textError.innerText = "";
        }
    }

    if (!stringName || !stringValue || !inputValueTrim || !inputValueTrim.includes("=")) {
        error("You entered an invalid format. Please enter 'Name=Value'");
        return;
    }

    arrayNameValuePairs.push({name: stringName, value: stringValue})
    inputPair.value = "";
    error();
    console.log(arrayNameValuePairs);
    outputText()
})
function outputText() {
let inputList = document.getElementById("inputList");
inputList.innerText = "";
for (const value of arrayNameValuePairs) {
    const textString = document.createElement("p");
    textString.classList.add("textString");
    textString.innerText = `${value.name}=${value.value}`;
    inputList.append(textString);
}}


let sortByNameButton = document.getElementById('sortByNameButton')
sortByNameButton.addEventListener("click", function () {
    arrayNameValuePairs.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }if (a.name < b.name) {
            return -1;
        }if (a.name === b.name){
            return 0;
        }
    })
    outputText()
})


let sortByValueButton = document.getElementById('sortByValueButton')
sortByValueButton.addEventListener("click", function () {
    arrayNameValuePairs.sort((a, b) => {
        if (a.value > b.value) {
            return 1;
        }if (a.value < b.value) {
            return -1;
        }if (a.value === b.value){
            return 0;
        }
    })
    outputText()
})

// let classActive = document.getElementById('textString')
// classActive.addEventListener("click", function (){
//     this.classList.add('active')
// })

let deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener("click", function () {
    inputList.innerText = "";
    arrayNameValuePairs = [];
})





