/*let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', askLetter);


let input = document.getElementById('input');
let btnKeys = document.querySelectorAll('button.key')

btnKeys.forEach(function(btnKey){
    btnKey.addEventListener('click', function(){
        let letterKey = btnKey.textContent;
        input.append(letterKey);
    })
})


function askLetter(){
    let arrayWord = ['chat', 'chien', 'lapin', 'oiseau', 'poussin',"tortue"];
    let randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 
    console.log(randomWord)

    let letter; 
    let word = [];
    for(let i = 0 ; i < randomWord.length ; i++) {
        word.push('_');
    }
    let compteur = 0;

    do{
        letter = prompt(word +'\n Entrez une lettre:');
        if(randomWord.includes(letter)){
            for(let i=0;i<randomWord.length; i++){
                if(randomWord[i] == letter){
                    word[i] = randomWord[i];
                    console.log(word);
                }
            }
        } 
        else if(compteur == 3){
            word = []
            compteur = 0;
        }
        else{
            compteur ++;
        }
    } while(word.join('').toString() !== randomWord);
}*/


//--------------------------------------------------------------V2
let element1 = document.querySelector('div.element1');
let element2 = document.querySelector('div.element2');
let element3 = document.querySelector('div.element3');
let element4 = document.querySelector('div.element4');
let element5 = document.querySelector('div.element5');
let element6 = document.querySelector('div.element6');
let element7 = document.querySelector('div.element7');
let element8 = document.querySelector('div.element8');
let element9 = document.querySelector('div.element9');
let element10 = document.querySelector('div.element10');
let element11 = document.querySelector('div.element11');

let input = document.querySelector('div#input');
let button = document.querySelector('button#reset')

let arrayWord = ['chat', 'chien', 'lapin', 'oiseau', 'poussin',"tortue"];
let randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 

randomWord = randomWord.toUpperCase()

let word = []; 
for(let i=0;i<randomWord.length;i++){
    word.push('_');
    input.innerHTML = word;

}
let compteur = 0;

console.log(randomWord);


function clickBtn(){
    let btnKeys = document.querySelectorAll('button.key');
    btnKeys.forEach(function(btnKey){
        btnKey.addEventListener('click', function(){
            let letterKey = btnKey.textContent;
            getTheWord(letterKey);
        })
    })
}
clickBtn()

function getTheWord(c){
    if(randomWord.includes(c)){
        for(let i = 0 ; i < randomWord.length ; i++) {
            if(randomWord[i] == c) { 
                word[i] = c;
                input.innerHTML = word;
            }
        }
    } 
    else{
        over();
    }
}

function over(){
    compteur ++;
    console.log(compteur);

    if(compteur == 1){
        element1.style.visibility = "visible";
    }
    else if(compteur == 2){
        element2.style.visibility = "visible";
    }
    else if(compteur == 3){
        element3.style.visibility = "visible";
    }
    else if(compteur == 4){
        element4.style.visibility = "visible";
    }
    else if(compteur == 5){
        element5.style.visibility = "visible";
    }
    else if(compteur == 6){
        element6.style.visibility = "visible";
    }
    else if(compteur == 7){
        element7.style.visibility = "visible";
    }
    else if(compteur == 8){
        element8.style.visibility = "visible";
    }
    else if(compteur == 9){
        element9.style.visibility = "visible";
    }
    else if(compteur == 10){
        element10.style.visibility = "visible";
    }
    else if(compteur == 11){
        element11.style.visibility = "visible";
        word = []
        compteur = 0;
        randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 
    }
}
