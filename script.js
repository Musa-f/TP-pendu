function askLetter(){
    //Valeurs résultats
    let arrayWord = ['chat', 'chien', 'lapin', 'oiseau', 'poussin',"tortue"];
    let randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)]; 
    let randomWordArray = randomWord.split(""); ['c', 'h']

    //Valeurs entrées par l'utilisateur
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
        if (compteur == 6){
            word = []
        }

    } while(word.join('').toString() !== randomWord);

    alert('Vous avez trouvé ! Le mot est bien ' + randomWord);
}


askLetter()