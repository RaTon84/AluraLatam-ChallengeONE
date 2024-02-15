var texto = hola
console.log(texto);

function encriptar(){
    var text = document.getElementById("textArea1").value;
    var textEncript = text
        .replace(/a/g, "efe")
        .replace(/e/g, "fefe")
}