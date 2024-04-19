let fullName = prompt("Por favor ingrese su nombre completo: ");
let result = fullName.toLowerCase();
const dominio = "@myDomain.com"
console.log(result)
const list = result.split(" ");
let userName = list[0].slice(0 , 3) + list[1].slice(0 , 3); 
let email = list[0].slice(0 , 3) + list[1].slice(0 , 3) + dominio; 
console.log("Nombre de usuario: " + userName);
console.log("Correo Electronico:" + email);

const users = {
    userName,
    email,
}
console.log(users)