var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");
var copy = document.getElementById("copy");
var boxText = document.getElementById("text-initial");
var result = document.getElementById("final-text");
var modifiedText;
var emptyText;

document.getElementById("rectangle-result").style.display = "none";

function clearText () {
    result.innerText = '';
    modifiedText = document.getElementById("rectangle-result")
    modifiedText.style.display = 'none';
    emptyText = document.getElementById("rectangle-initial");
    emptyText.style.display = 'flex';
}

function encrypting () {
    modifiedText = document.getElementById("rectangle-result")
    modifiedText.style.display = 'flex';
    emptyText = document.getElementById("rectangle-initial");
    emptyText.style.display = 'none';
    result.innerText = '';
    var textBase = boxText.value;
    textBase = textBase.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    result.append(textBase);
}

function decrypting() {
    modifiedText = document.getElementById("rectangle-result");
    modifiedText.style.display = 'flex';
    emptyText = document.getElementById("rectangle-initial");
    emptyText.style.display = 'none';
    result.innerText = '';
    var textBase = boxText.value;
    textBase = textBase.replaceAll('ufat', 'u').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('imes', 'i').replaceAll('enter', 'e');
    result.append(textBase);
}

function encryptText() {
    if (boxText.value.length < 1) {
        clearText();
    }
    else {
       encrypting();
    }

}

function decryptText() {
    if (boxText.value.length < 1) {
        clearText();
    }
    else {
        decrypting();
    }
}

function textCopy() {
    result.select();
    navigator.clipboard.writeText(result.value);
}

encrypt.onclick = encryptText;
decrypt.onclick = decryptText;
copy.onclick = textCopy;
