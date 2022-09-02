const cipherCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]
const inputText = document.getElementById('cipher-text');
const inputResult = document.getElementById('cipher-result');

/* Buttons functions */

const cipher = () => {
    const cipheredText = cipherText(inputText.value);
    inputResult.value = cipheredText;
    inputText.value = '';
}

const uncipher = () => {
    const uncipheredText = uncipherText(inputText.value);
    inputResult.value = uncipheredText;
    inputText.value = '';
}

const copy = () => {
    if(inputResult.value !== ''){
        copyResult();
    }else{
        alert('¡No hay texto que copiar!');
    }
}

/* Ciphering functions */

const copyResult = () => {
    inputResult.select();
    navigator.clipboard.writeText(inputResult.value);
    alert('¡Texto copiado!');
}

const clearInputs = () => {
    inputText.value = '';
    inputResult.value = '';
}

const cipherText = (textToCipher) => {
    let cipheredText = textToCipher.toLowerCase();
    for (let i = 0; i < cipherCode.length; i++) {
        if (cipheredText.includes(cipherCode[i][0])) {
            cipheredText = cipheredText.replaceAll(cipherCode[i][0], cipherCode[i][1]);
        }
    }
    return cipheredText;
}

const uncipherText = (textToUncipher) => {
    let uncipheredText = textToUncipher.toLowerCase();
    for (let i = 0; i < cipherCode.length; i++) {
        if (uncipheredText.includes(cipherCode[i][1])) {
            uncipheredText = uncipheredText.replaceAll(cipherCode[i][1], cipherCode[i][0]);
        }
    }
    return uncipheredText;
}