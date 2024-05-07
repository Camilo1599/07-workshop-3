//RETO 2: Validacion de Contraseñas
let letters=false, letter = new RegExp('[a-zA-Z]')
let number=false, num = new RegExp('[0-9]')
let caracterSpecial =false, specialCaracter = new RegExp(/[!@#$%^&*()+=_\-{}\[\]:;"'?<>,.\/|\\~`]/)
let length = false;
let password = prompt("Ingrese una contraseña segura");

//verifica el largo de la string
if (password.length >= 8 ){
    length = true;

}
else{
    console.log("La contraseña debe tener mas de 8 caracteres")
}

//c¿verifica que tenga por lo menos un numero
if (num.test(password)){
    number = true;  
}
else{
    console.log("LA contraseña debe tener numeros")
}
//verifica que tenga por lo menos una letra
if(letter.test(password)){
    letters = true 
}
else{
    console.log("La contraseña debe tener letras")
}

//verifica que tenga caracteres especiales
if(specialCaracter.test(password)){
    caracterSpecial = true
}
else{
    console.log("La contraseña debe tener caracteres especiales")
}

if(length == true && number == true && letters == true && caracterSpecial == true){
    console.log("La contraseña es segura")
}
else{
    console.log("La contraseña No es segura")
}