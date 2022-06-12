function pigIt(str){
    let words = str.split(" ");
    let punctuations = [",", ".", ":", "!", "?"];
    let tempArr = []
    for (let word of words){
        for (let punc of punctuations){
            if (!word.includes(punc) && word.length > 1){
                tempWord = word[0];
                word = word.slice(1, word.length)
                word += tempWord + 'ay';
            }
        }
        tempArr.push(word);
    }
    tempArr = tempArr.map((word) => {
        punctuations.forEach((punc) => {
            if (word.includes(punc)){
                word = word.replace(punc, "");
            }
        })
        return word;
    })
    return tempArr.join(" ")
}

console.log(pigIt("Oay emporatay oay oresmay !"));
// igPay atinlay siay oolcay
