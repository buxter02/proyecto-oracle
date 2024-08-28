// Función para encriptar texto
function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar texto
function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Manejar el botón de encriptar
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
});

// Manejar el botón de desencriptar
document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
});

// Manejar el botón de copiar
document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
