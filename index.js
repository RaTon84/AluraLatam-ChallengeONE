
function encriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        alert("ingrese un texto");      
    } else {
        var text = document.getElementById("textArea1").value;        
        var textEncript = text
            .replace(/a/g, "efe")
            .replace(/e/g, "few")
            .replace(/i/g, "dec")
            .replace(/o/g, "wce")
            .replace(/u/g, "thn")
            .replace(/r/g, "umt")
            .replace(/l/g, "olp")
            .replace(/p/g, "wetf")
            console-console.log(textEncript);
        document.getElementById("textArea2").value = textEncript               
    }
};

function desencriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        alert("ingrese un texto");      
    } else {
        var text = document.getElementById("textArea1").value;        
        var textEncript = text
            .replace(/efe/g, "a")
            .replace(/few/g, "e")
            .replace(/dec/g, "i")
            .replace(/wce/g, "o")
            .replace(/thn/g, "u")
            .replace(/r/g, "umt")
            .replace(/l/g, "olp")
            .replace(/p/g, "wetf")
            console-console.log(textEncript);
        document.getElementById("textArea2").value = textEncript               
    }
};
