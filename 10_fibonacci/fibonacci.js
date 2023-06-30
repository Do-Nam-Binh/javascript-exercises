const fibonacci = function(pos) {
    if(pos - 1 < 0){
        return 'OOPS';
    }
    pos = parseInt(pos);
    let firstNum = 1;
    let secondNum = 1;
    let current = 0;
    if(pos - 1 === 0 || pos - 1 === 1){
        return 1;
    }
    for(let i = 2; i < pos; i++){
        current = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
