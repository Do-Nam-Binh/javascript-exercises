const sumAll = function(num1, num2) {
    if(typeof(num1) === "number" && typeof(num2) === "number"){
        if(num1 < 0 || num2 < 0){
            return 'ERROR';
        }
        if(num1 < num2){
            return (num2 * (num1 + num2)) / 2;
        }else{
            return (num1 * (num1 + num2)) / 2;
        }
    }else{
        return 'ERROR';
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
