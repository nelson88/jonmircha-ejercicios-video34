(function(){

    //Ejercicio 5
    const invertirpalabra = (cadena = "") =>{
        (!cadena) 
         ? console.warn("No ingresaste una cadena.")
         : console.info(cadena.split("").reverse().join(""));

        //let tamanio = cadena.length, cadenainvertida = "";

        //for(x = tamanio; x>=0; x--) cadenainvertida += cadena.charAt(x);
    };

    //Ejercicio 6
    const palabrarepetida = (cadena = "", palabra = "") => {
        if(!cadena) return console.warn("No ingresaste una cadena.");

        if(!palabra) return console.warn("Ingrese la palabra a buscar.");

        let i = 0,
            contador = 0;

        while(i !== -1)
        {
            i = cadena.indexOf(palabra, i);
            if(i !== -1){
                i++;
                contador++;
            }
        }
        // let cadenaAArray = cadena.split(" ");
        // let count = 0;

        // for(i = 0; i <= cadenaAArray.length; i++){
        //     if(cadenaAArray[i] === palabra) count++;       
        // }

        return console.info(`La palabra ${palabra} se repite ${contador}`);
    }

    //Ejercicio 7
    const espalindromo = (cadena = "") =>{
        if(!cadena) return console.warn("No ingresaste una cadena.");
        
        cadena = cadena.toLowerCase();
        let alreves = cadena.split("").reverse().join("");

        return (cadena === alreves)
                ? console.info(`Si es palindromo, palabra orginal ${cadena}, palabra al reves ${alreves}`)
                : console.info(`No es palindromo, palabra orginal ${cadena}, palabra al reves ${alreves}`);
        // let arraycadena = cadena.split("");
        // let nuevoarray = cadena.split("").reverse();

        // for(i = 0; i <= 0; i++)
        // {
        //     if(arraycadena[i] !== nuevoarray[i]) return console.log(false); 
        // }

        //return console.log(true);
    }

    //Ejercicio 8
    const eliminarpatron = (cadena = "", patron = "") => 
    (!cadena)
     ? console.warn("No ingresaste una cadena.")
     : (!patron)
        ? console.warn("No ingresaste el patron a cambiar.")
        : console.info(cadena.replace(new RegExp(patron, "ig"), ""));
    //{
        // if(!cadena) return console.warn("No ingresaste una cadena.");

        // if(!patron) return console.warn("No ingresaste el patron a cambiar.");
        

        // const regex = new RegExp(/xyz/gi);

        // console.info(cadena.replace(regex, ""));
    //}


    eliminarpatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
    //espalindromo("salas");
    //invertirpalabra("Nelson Jose Velasquez Castillo");
    //palabrarepetida("hola mundo adios mundo", "mundo");
})();