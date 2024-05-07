const email = prompt("Por favor ingresa tu correo mailectronico: ");

const tenerArroba = (mail) => {
    return mail.includes("@");
}

const puntoDespuesDelArroba = (mail) => {
    if (!tenerArroba(mail)) return false;
    return mail.split("@")[1].includes(".");
}

const puntoArrobaSeparados = (mail) => {
    if (!tenerArroba(mail)) return false;
    return !mail.includes("@.") || !mail.includes(".@");
}

const espaciosVacios = (mail) => {
    return !mail.includes(" ");
}

if ( tenerArroba(email) == true && puntoDespuesDelArroba(email) == true && puntoArrobaSeparados(email) == true && espaciosVacios(email) == true ){
    console.log("Correo electrónico válido")
}
else{
    console.log("Correo electronico invalido")
}