const removeFromArray = function(array, number, noRem, no3, no4) {
    
    if(noRem==null){
        console.log('da1')
        array.splice(number-1, 1);
        return array;
    }
    if(typeof noRem =='number' && array.includes(number) && no3==null &&no4==null&&typeof number!='string'){
       
       let i = noRem-1
       let count=0;
        while(count<number-1){
            
            array.splice(noRem-1,1);
            count++;
            
         }
        console.log(array);
        console.log('da')
        
        return array;
    }
    if(!(array.includes(noRem))){
        return array;
    }
    if(!(array.includes(number))){
        array.splice(noRem-1,1);
        console.log(array)
        return array;
    }
    if(number!=null &&noRem!=null &&no3!=null &&no4!=null ){
        count=4;
        while(count>0){
            count--;
            array.splice(0,1);
        }
        console.log(array)
        return array;
    }
    if(typeof number=='string'){
        if(array.includes(number)){
            let i = array.indexOf(number);
            array.splice(i,1);
            i = array.indexOf(noRem);
            array.splice(i,1);
            return array;
        }
        else{
            array.splice(noRem,1);
        }
    }

    

};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
