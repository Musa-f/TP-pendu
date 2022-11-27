/*let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', askLetter);*/

function clickBtn(){
    let input = document.getElementById('input');
    let btnKeys = document.querySelectorAll('button.key')

    btnKeys.forEach(function(btnKey){
        btnKey.addEventListener('click', function(){
            letterKey = btnKey.textContent;
            input.append(letterKey);
        })
    })
}


function askLetter(){
    let arrayWord = ['chat', 'chien', 'lapin', 'oiseau', 'poussin',"tortue"];
    let randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 
    console.log(randomWord)
    let randomWordArray = randomWord.split("");

    let letter; 
    let word = []; 

    let compteur = 0;

    do{
        letter = prompt(word +'\n Entrez une lettre:');
        if(randomWord.includes(letter)){
            for(let i=0;i<randomWordArray.length; i++){
                if(randomWordArray[i] == letter)
                {
                    word[i] = letter;
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
}

askLetter()