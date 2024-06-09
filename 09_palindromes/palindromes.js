const palindromes = function (...words) {
    words=words.join('');
    words=words.toLowerCase().split('').filter((char)=> /([a-z]|[A-Z]|[0-9])/.test(char));
    let reflection = [];
    for(let i=0; i<words.length; i++){
        reflection[i]=words[i];
    }
    console.log('words:'+words);
    console.log('flip'+reflection);
    reflection.reverse();
    console.log('words2:'+words);
    console.log('flip2'+reflection);
    reflection=reflection.join('');
    words=words.join('');
    //console.log("string: "+ words);
    //console.log("reflection: " + reflection);
    return reflection===words;
}

// Do not edit below this line
module.exports = palindromes;
