//RETO: 1;
const dominio = "@myDomain.com"
let option,flag = true;
let users={};

while(true){
    option = prompt("Que deseas hacer?\n1.Ingresar un usuario\n2.salir")
    if (option == 1){
        let fullName = prompt("Por favor ingrese su nombre completo: "); //1
        let result = fullName.toLowerCase(); // 2
        console.log(result)
        const list = result.split(" ");// 3
        let userName = list[0].slice(0 , 3) + list[1].slice(0 , 3); // 3
        
        
        const matches = findUsername(userName) 
        if (matches > 0) {
            userName += matches;
        }
        let email = userName + dominio; // 4 y 5 
        
        Object.assign(users, {                        // 6
            [userName] :email,
        });
        console.log("Nombre de usuario: " + userName);
        console.log("Correo Electronico:" + email);

        function findUsername(username) {
            const userKeys = Object.keys(users);
            let matches = 0
            userKeys.forEach(e => {
                let semiMatch = ""
                for (let i = 0; i < e.length; i++) {
                    semiMatch += e[i];
                    if (semiMatch === username) {
                        matches++
                    }
                }

            })
            return matches;
        }
        console.log(users)
    }
    else if (option == 2){
        console.log("Gracias por usarnos")
        flag = false;
    }
    else{
        console.log("Por favor ingrese una opcion valida")
    }
}
