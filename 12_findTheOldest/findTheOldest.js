const findTheOldest = function(arr) {
    let oldest = 0;
    let result;
    for(let i =0; i < arr.length; i++){
        if(arr[i].hasOwnProperty('yearOfDeath')){
            if((arr[i].yearOfDeath - arr[i].yearOfBirth) > oldest){
                oldest = arr[i].yearOfDeath - arr[i].yearOfBirth;
                result = Object.assign({}, arr[i]);
            }
        }else{
            let currentTime = new Date();
            let year = currentTime.getFullYear();
            if((year - arr[i].yearOfBirth) > oldest){
                oldest = year - arr[i].yearOfBirth;
                result = Object.assign({}, arr[i]);
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
