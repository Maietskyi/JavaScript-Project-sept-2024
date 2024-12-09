// Оголошую змінну, яка є масивом і буде приймати введені Name=Value
let arrayNameValuePairs = [];

// Створюю функцію яку буду викликати кожного разу як будуть відбуватись зміни в масиві, і буду записувати оновлення
// в локальне сховище
function recordTolocalStorage () {
    localStorage.setItem('arrayNameValuePairs', JSON.stringify(arrayNameValuePairs))
}

// Створюю функцію яка буде виводити збереженений масив з localStorage, і виводити Pair "Name=Value" в блок з текстом
// при завантаженні веб-сторінки (документу)
onload = () => {
    // Оголошую змінну і прив'язую до свого Local Storage
    const dataFromToLocalStorage = localStorage.getItem("arrayNameValuePairs");
    // Роблю перевірку якщо в Local Storage є записані дані - то витягую їх, і вказую що оголошений вище масив
    // arrayNameValuePairs буде приймати (розпарсені) витягнуті значення з Local Storage
    if (dataFromToLocalStorage) {
        arrayNameValuePairs = JSON.parse(dataFromToLocalStorage);
        // Викликаю функція, щоб витягнуті значення вивести в блок для тексту
        outputText();
    }
}

// Оголошую змінну і прив'язую до неї id кнопки запису add
const addButton = document.getElementById('addButton')

// На кнопку Add ставлю функція click, яка буде обробляти значення котре введене в input
addButton.addEventListener("click", function () {
    // Оголошую змінну і прив'язую до неї id поля input
    const inputPair = document.getElementById("inputPair");
    // Оголошую змінну котра вирізатиме пробіли перед та/або після дорівнює у введенному значенні input
    const inputValueTrim = inputPair.value.trim();

    // Створюю функцію яка виводитиме текст помилки, якщо тексту помилки не буде - то не виводитиме нічого
    // Викликатиму цю функцію в місцях перевірки пари "Name=Value", текст помилки описуватиму у відповідності до помилки
    function error(errorText) {
        const textError = document.getElementById("textError")
        if (errorText) {
            textError.innerText = `${errorText}`;
        } else {
            textError.innerText = "";
        }
    }

    // Оголошую змінну масив, в який записую значення пари Name=Value з input, створюю новий масив, значення якого
    // розділяю по знаку "=", і вирізаю знак '='. Перше це stringName, а друге це stringValue
    const [stringName, stringValue] = inputValueTrim.split("=").map(str => str.trim());

    // Роблю перевірку, якщо немає значення "Name", або значення "Value", або в input нічого не записано, або немає
    // знаку "=", то виводжу текст помилки
    if (!stringName || !stringValue || !inputValueTrim || !inputValueTrim.includes("=")) {
        error("You entered an invalid format. Please enter 'Name=Value'");
        return;
    }

    // Оголошую змінну, в якій прописую яким параметрам буде відповідати Name та Value відповідно
    // такому шаблону "Name=Value", щоб в "Name=Value" були тільки буквенно-цифрові символам.
    const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;

    // Тестую пару Name=Value яка буде потрапляти, після того як з неї будуть прибрані пробіли
    // Якщо пара Name=Value не відповідає цим умовам - то описую текст помилки, котру за допомогою функції буду
    // виводити до клієнта. Виходжу з перевірки if
    if (!regex.test(inputValueTrim)) {
        error("You entered special characters. Use only alphanumeric characters.");
        return;
    }

    // Після перевірок пушу об'єкт в масив
    arrayNameValuePairs.push({name: stringName, value: stringValue});
    // Прибираю введене значення з input
    inputPair.value = "";
    // Забираю будь-який текст з рядочка куди виводив помилки
    error();
    // А також викликаю функцію яка виводитиме текст в блок
    outputText();
})

// Створюю функцію яка виводить всі об'єкти з масиву в блок по такому зразку який наведений в тз, тобто "Name=Value"
function outputText() {
    const inputList = document.getElementById("inputList");
    // При кожному виклику функції я прибираю текст який був виведений раніше і перезаписую, щоб не дублювалось
    inputList.innerText = "";
    // Запускаю цикл в якому перебираю всі об'єкти масиву. в Циклі створюю параграф для пари "Name=Value"
    // В параграф записую значення з об'єкта і додаю цей текст в блок
    for (const value of arrayNameValuePairs) {
        const textString = document.createElement("p");
        textString.classList.add("textString");
        textString.innerText = `${value.name}=${value.value}`;
        inputList.append(textString);
    }
    recordTolocalStorage();
}
// Оголошую змінну яку зв'язую з id кнопки сортування за назвою
const sortByNameButton = document.getElementById('sortByNameButton')
// На кнопку Sort By Name ставлю функція click, яка буде сортувати пари в блоці за назвою
sortByNameButton.addEventListener("click", function () {
    arrayNameValuePairs.sort((a, b) => {
        if (a.name > b.name) {return 1;}
        if (a.name < b.name) {return -1;}
        if (a.name === b.name) {return 0;}
    })
    // Викликаю функцію виведення (перезаписування) тексту в блок з парами
    outputText();
})
// Оголошую змінну яку зв'язую з id кнопки сортування за значенням
const sortByValueButton = document.getElementById('sortByValueButton')
// На кнопку Sort By Value ставлю функція click, яка буде сортувати пари в блоці за значенням
sortByValueButton.addEventListener("click", function () {
    arrayNameValuePairs.sort((a, b) => {
        if (a.value > b.value) {return 1;}
        if (a.value < b.value) {return -1;}
        if (a.value === b.value) {return 0;}
    })
    // Викликаю функцію виведення (перезаписування) тексту в блок з парами
    outputText();
})
// Оголошую змінну яку зв'язую з id кнопки видалення
const deleteButton = document.getElementById('deleteButton')
// На кнопку Delete ставлю функція click, яка буде видаляти (перезаписувати пусте значення) пари в блоці для тексту,
// перезаписувати пустий масив, а також очищати localStorage
deleteButton.addEventListener("click", function () {
    inputList.innerText = "";
    arrayNameValuePairs = [];
    localStorage. clear();
})
