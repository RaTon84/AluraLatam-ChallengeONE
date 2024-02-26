function msjIngreseTexto() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ingreso un texto a encriptar"
    });
}

function msjSinTexto() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay texto para copiar"
    });
}

function msjEncriptar() {
    Swal.fire({
        title: "Encriptando Texto",
        html: "Esta ventana se cerrara en <b></b> milliseconds.",
        timer: 1000,
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
}

function encriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        msjIngreseTexto();
    } else {
        msjEncriptar();
        setTimeout(function () {
            let timerInterval;
            var text = document.getElementById("textArea1").value.toLowerCase();           
            var textEncript = text
                .replace(/a/gi, "rsyx")
                .replace(/e/gi, "dfg")
                .replace(/i/gi, "nbm")
                .replace(/o/gi, "lopw")
                .replace(/u/gi, "iku");           
            document.getElementById("textArea2").value = textEncript;            
            document.getElementById("textArea2").style = "background: none;";  
            location.href = "#textArea2";          
        }, 1000);      
    }
};

function desencriptar() {
    if (document.getElementById("textArea1").value.length == 0) {
        msjIngreseTexto();
    } else {
        msjEncriptar();
        setTimeout(function () {
            var text = document.getElementById("textArea1").value;
            var textEncript = text
                .replace(/rsyx/gi, "a")
                .replace(/dfg/gi, "e")
                .replace(/nbm/gi, "i")
                .replace(/lopw/gi, "o")
                .replace(/iku/gi, "u");
            document.getElementById("textArea2").value = textEncript;
            document.getElementById("textArea2").style = "background: none;";
            location.href = "#textArea2";
        }, 1000);
    }
};

function sacarImagen() {
    if (document.getElementById("textArea2").value.length == 0) {
        document.getElementById("textArea2").style = "background-image: url(./img/Muñeco.png)";
    } else
        document.getElementById("textArea2").style = "background: none;";
}

function copiar() {
    if (document.getElementById("textArea2").value.length == 0) {
        msjSinTexto();
    } else {
        Swal.fire("Mensaje Copiado");
        navigator.clipboard.writeText(document.getElementById("textArea2").value);
        document.getElementById("textArea2").value = "";
        document.getElementById("textArea1").value = "";        
        document.getElementById("textArea2").style = "background-image: url(./img/Muñeco.png)";
        location.href = "#encriptador";
    }
}

var modo = "light";
function cambiarModo() {
    if (modo == "light") {
        document.querySelector('body').setAttribute("data-bs-theme", "dark");
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-brightness-high-fill");
        document.querySelector("#iconoModo").setAttribute("style", "color: yellow;");
        document.querySelector("#logo-imagen").setAttribute("src", "./img/logo-alura-white.png")
        modo = "oscuro";
    } else {
        document.querySelector('body').setAttribute("data-bs-theme", "light");
        document.querySelector("#iconoModo").setAttribute("class", "bi bi-moon-fill ");
        document.querySelector("#iconoModo").setAttribute("style", "color: black;");
        document.querySelector("#logo-imagen").setAttribute("src", "./img/logo-alura-black.png")
        modo = "light";
    }
}

