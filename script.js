let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPasss = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()";

let pass = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){

    sizePassword.innerHTML = this.value;

}

function gerar() {
alert("Vamos gerar a senha!");
for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
pass += charset.charAt(Math.floor(Math.random()*n));
}

console.log(pass)
password.innerHTML = pass;
containerPasss.classList.remove("hide");
}

function aviso(){
    alert("O botão ira gerar uma senha aleatoria conforme a quantidade de caracteres solicitados.")
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i)
    pass += charset.charAt(Math.floor(Math.random()*n));
}

function copiar(){
    alert("Senha copiada!");
    navigator.clipboard.writeText(pass);
    containerPasss.classList.add("hide");

}
