function encriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        alert("ingrese un texto");      
    } else {
        var text = document.getElementById("textArea1").value.toLowerCase();
        console.log(text)     
        var textEncript = text
            .replace(/a/gi, "rsyx")
            .replace(/e/gi, "dfg")
            .replace(/i/gi, "nbm")
            .replace(/o/gi, "lopw")
            .replace(/u/gi, "iku")            
            console-console.log(textEncript);
        document.getElementById("textArea2").value = textEncript;  
        location.href = "#result"             
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
        document.getElementById("textArea2").value = textEncript;
        location.href = "#result"             
    }
};
function copiar(){      
    navigator.clipboard.writeText(document.getElementById("textArea2").value);
    document.getElementById("textArea2").value = "";
    document.getElementById("textArea1").value = "";
    location.href = "#encriptador"
}
/*function OcultarPlaceHolder(){
    document.onfocus
}*/
var modo="light";
function cambiarModo(){    
    if(modo=="light"){
        document.querySelector('body').setAttribute("data-bs-theme","dark");
        modo="oscuro";
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-brightness-high-fill");
        document.querySelector("#iconoModo").setAttribute("style", "color: yellow;");
    }else{
        document.querySelector('body').setAttribute("data-bs-theme","light");
        modo="light";
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-moon-fill ");
        document.querySelector("#iconoModo").setAttribute("style", "color: black;");
    }
}
