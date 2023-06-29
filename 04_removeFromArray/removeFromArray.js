const removeFromArray = function(arr, ...element) {
    let result = [];
    arr.forEach((item) => {
        if(!element.includes(item)){
            result.push(item);
        }        
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
