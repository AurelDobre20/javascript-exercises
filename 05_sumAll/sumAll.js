const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber<0 || secondNumber<0 || typeof firstNumber!='number' || typeof secondNumber!='number'){
        return 'ERROR';
    }
    let sum = 0;
    if(firstNumber<secondNumber){
        
        for(let i = firstNumber; i<=secondNumber; i++) {
            sum = sum + i;
        }
        return sum;
    }
    else{
        for(let i = secondNumber; i<=firstNumber; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
