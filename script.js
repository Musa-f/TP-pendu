let btnReset = document.getElementById('reset');

btnReset.addEventListener('click', askLetter)


function askLetter(){
    let arrayWord = ['chat', 'chien', 'lapin', 'oiseau', 'poussin',"tortue"];
    let randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 
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
        }else{
            compteur ++;
        }
        if (compteur == 5){
            word = []
        }
    } while(word.join('').toString() !== randomWord);
}
