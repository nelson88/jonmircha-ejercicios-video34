(function(){
    let btnguardar = document.getElementById("btnguardar");

    btnguardar.onclick = function(){
        let numbercharacters = document.getElementById("numbercharacters").value;
        let croppednumber = document.getElementById("croppednumber").value;
        let croppedtext = document.getElementById("croppedtext").value;
        let separatetextarray = document.getElementById("separatetextarray").value;
        let repeatingtext = document.getElementById("repeatingtext").value;
        let numberofrepetitions = document.getElementById("numberofrepetitions").value;
        
        //Ejercicio 1
        const contarcaracteres = (numbercharacters = "") => 
           (!numbercharacters) ? console.warn("No ingresaste ninguna cadena.")
           : console.info(`El numero de caracteres "${numbercharacters.length}"`); 

       //Ejercicio 2
       const recortarTexto = (croppedtext = "", croppednumber = undefined) =>
       (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : (croppednumber === undefined)
         ? console.warn("No ingresaste el numero para recortar la cadena de texto")
         : console.info(croppedtext.slice(0, croppednumber));

        //Ejercicio 3
        const candenaAArreglo = (cadena = "", separador = undefined) =>
         (!cadena)
         ? console.warn("No ingresaste ninguna cadena de texto")
         : (separador === undefined)
          ? console.warn("No ingresaste el caracter separador")
          : console.info(cadena.split(separador));


        //Ejercicio 4
        const repetirTesto = (texto = "", veces = undefined) => {
            if(!texto) return console.warn("No ingresaste el texto");

            if(veces === undefined) return console.warn("No ingresaste el numero a repetir el texto");

            if(veces === 0) return console.error("El numero de veces no puede ser 0");

            if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

            for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
        }

        if(typeof numbercharacters == "string")
        {
            contarcaracteres();
            
            //NumberOfCharacters(numbercharacters);
        }

        if(typeof croppedtext == "string")
        {
            CroppedText(croppednumber, croppedtext);
        }

        if(typeof separatetextarray == "string")
        {
            SeparateTextArray(separatetextarray);
        }

        if(typeof repeatingtext == "string")
        {
            NumberOfRepetitions(repeatingtext, numberofrepetitions);
        }


    }

})();



function NumberOfCharacters(numbercharacters = "")
{
    let resultnumchar = document.getElementById('resultnumchar');
    if(!numbercharacters)
    {
        let resultnumchar = "No ingresaste ninguna cadena.";
    }else{
        resultnumchar.innerHTML = `El numero de caracteres "${numbercharacters.length}"`;
    }
}

function CroppedText(croppednumber, croppedtext)
{
    let resultcroppedtext = document.getElementById("resultcroppedtext");
    resultcroppedtext.innerHTML = "La nueva cadena es: " + croppedtext.substring(0, Number(croppednumber));
                                                                      //.slice
}

function SeparateTextArray(separatetextarray)
{
    let resulttexarray = document.getElementById("resulttexarray");
    resulttexarray.innerHTML = Array.from(separatetextarray);
}

function NumberOfRepetitions(repeatingtext, numberofrepetitions)
{
    let resultreptex = document.getElementById("resultreptex");
    resultreptex.innerHTML = "" + repeatingtext.repeat(Number(numberofrepetitions));
}