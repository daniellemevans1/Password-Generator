const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomIndex;
let generateEl = document.querySelector("#generate-el");
let pass1 = "";
let pass2 = "";
let pass1El = document.querySelector("#pass1-el");
let pass2El = document.querySelector("#pass2-el");





generateEl.addEventListener("click", function() {
    for(let i = 0; i < characters.length; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        if (pass1.length < 15) {
            pass1 += characters[randomIndex];
        }
    }

    pass1El.textContent = pass1;


    for(let i = 0; i < characters.length; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        if (pass2.length < 15) {
            pass2 += characters[randomIndex];
        }
    }

    pass2El.textContent = pass2;

    
});
