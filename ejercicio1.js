(function(){
    let btnguardar = document.getElementById("btnguardar");

    btnguardar.onclick = function(){
        let numbercharacters = document.getElementById("numbercharacters").value;
        let croppednumber = document.getElementById("croppednumber").value;
        let croppedtext = document.getElementById("croppedtext").value;
        let separatetextarray = document.getElementById("separatetextarray").value;
        let repeatingtext = document.getElementById("repeatingtext").value;
        let numberofrepetitions = document.getElementById("numberofrepetitions").value;
        

        if(typeof numbercharacters == "string")
        {
            NumberOfCharacters(numbercharacters);
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


function NumberOfCharacters(numbercharacters)
{
    let resultnumchar = document.getElementById('resultnumchar');
    resultnumchar.innerHTML = "El numero de caracteres: " + numbercharacters.length;
}

function CroppedText(croppednumber, croppedtext)
{
    let resultcroppedtext = document.getElementById("resultcroppedtext");
    resultcroppedtext.innerHTML = "La nueva cadena es: " + croppedtext.substring(0, Number(croppednumber));
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