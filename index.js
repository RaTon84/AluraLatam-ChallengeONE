function encriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        alert("ingrese un texto");      
    } else {
        var text = document.getElementById("textArea1").value;        
        var textEncript = text
            .replace(/a/gi, "rsyx")
            .replace(/e/gi, "dfg")
            .replace(/i/gi, "nbm")
            .replace(/o/gi, "lopw")
            .replace(/u/gi, "iku")            
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
            .replace(/rsyx/gi, "a")
            .replace(/dfg/gi, "e")
            .replace(/nbm/gi, "i")
            .replace(/lopw/gi, "o")
            .replace(/iku/gi, "u")          
            console-console.log(textEncript);
        document.getElementById("textArea2").value = textEncript               
    }
};
function copiar(){
    var copy = document.getElementById("textArea2").value;
    
}
