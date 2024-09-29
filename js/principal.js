// var titulo=document.querySelector(".titulo");
// titulo.textContent = "Aparecida Nutricionista"
// var paulo = document.querySelector('#pacientepaulo');
// var peso = paulo.querySelector(".info-peso").textContent;
// var altura= paulo.querySelector(".info-altura").textContent;
// var imc = peso/(altura*altura);
// paulo.querySelector(".info-imc").textContent= imc;
var pacientes = document.querySelectorAll(".paciente");
for (var i=0; i < pacientes.length; i++){
    var paulo = pacientes[i];
    var peso = paulo.querySelector(".info-peso").textContent;
    var altura= paulo.querySelector(".info-altura").textContent;
    var imc = peso/(altura*altura);
    paulo.querySelector(".info-imc").textContent= imc.toFixed(2);
}