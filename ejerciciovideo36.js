(function(){
    //Ejercicio 9
    const numeroaleatorio = (min, max) => console.info(Math.round(Math.random() * (max - min) + min ));

    //Ejercicio 10
    const numerocapicua = (numero = 0) =>
        (numero === 0) 
         ? console.warn("No ingresaste el numero.")
         : console.info(numero.toString().split("").reverse().join("") === numero.toString());
        
        // console.log(numero.toString().split(""));
        // console.log(numero.toString().split("").reverse());
        // console.log(numero.toString().split("").reverse().join(""));

    //Ejercicio 11
    const obtenerfactorial = (n = 0) => {
        if(n === 0) console.warn("No ingresaste el numero.");
        
        let total = 1;
        for(let i=1; i<=n; i++) total = total * i;
            
        return console.info(total);
    }

    //Ejercicio 12
    const numeroprimo = (num = 0) => {
        if(num === 0) console.warn("No ingresaste el numero.");

        for(let i = 2; i < num; i++) if(num % i === 0) return console.info(false);
        
        return console.info(true);
    }

    //Ejercicio 13
    const numeroparoimpar = (numero = 0) => 
        (numero === 0) 
         ? console.warn("No ingresaste el numero.")
         : ((numero % 2 === 0).isInteger)
            ? console.info("Par")
            : console.info("Impar");

    //Ejercicio 14
    const temperatura = (value = 0, tipo = "") => {
        if(value === 0) console.warn("Ingrese el valor");

        if(!tipo) console.warn("Ingrese a que grado lo quiere convertir");

        (tipo.toLowerCase() === 'c')
         ? console.info(value * 9 / 5 + 32)
         : console.info((value - 32 ) * 5 / 9);
    }
    
    //temperatura(0, "c");
    //numeroparoimpar(29);
    //numeroprimo(5);
    //obtenerfactorial(5);
    //numerocapicua(2002);
    //numeroaleatorio(501, 600);
    
})();