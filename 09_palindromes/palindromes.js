const palindromes = function (sentence) {
    let result = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    result = result.replace( / +/g, '');
    result = result.toLowerCase();
    let reverse = result.split('').reverse().join('');
    if(result === reverse){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
