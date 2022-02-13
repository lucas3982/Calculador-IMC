window.onload = iniciar;

function iniciar() {
    var btnCalcular = document.getElementById('btnCalcular');

    btnCalcular.addEventListener("click", clickbtnCalcular);

}

function clickbtnCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var Peso = txtPeso.value;
    var txtAltura = document.getElementById("txtAltura");
    var Altura = txtAltura.value;

    var IMC = Peso / (Altura * Altura);

    alert("Su indice de mas corporal es: "  +  IMC);


}

