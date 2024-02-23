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
        location.href = "#result";
        document.getElementById("textArea2").style = "background: none;";           
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
        location.href = "#result";
        document.getElementById("textArea2").style = "background: none;";              
    }
};
function sacarImagen(){
    if (document.getElementById("textArea2").value.length == 0){
        document.getElementById("textArea2").style = "background-image: url(./img/Muñeco.png)";
    }else
    document.getElementById("textArea2").style = "background: none;"; 
}
function copiar(){      
    navigator.clipboard.writeText(document.getElementById("textArea2").value);
    document.getElementById("textArea2").value = "";
    document.getElementById("textArea1").value = "";
    location.href = "#encriptador";
    document.getElementById("textArea2").style = "background-image: url(./img/Muñeco.png)";
}
var modo="light";
function cambiarModo(){    
    if(modo=="light"){
        document.querySelector('body').setAttribute("data-bs-theme","dark");        
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-brightness-high-fill");
        document.querySelector("#iconoModo").setAttribute("style", "color: yellow;");
        document.querySelector("#logo-imagen").setAttribute("src", "./img/logo-alura-white.png")
        modo="oscuro";
    }else{
        document.querySelector('body').setAttribute("data-bs-theme","light");        
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-moon-fill ");
        document.querySelector("#iconoModo").setAttribute("style", "color: black;");
        document.querySelector("#logo-imagen").setAttribute("src", "./img/logo-alura-black.png")
        modo="light";
    }
}
/*------------------------------------------------*/
let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
/*---------------------------------------------------- */
