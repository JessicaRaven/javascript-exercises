const fibonacci = function(num) {
//take in input number and create fibonacci
    num = +num;
    let sequence=[];
    sequence[0]=1;
    sequence[1]=1;
    for(let i=2; i<num; i++){
        sequence[i]=sequence[i-1] + sequence [i-2];
    }
    if(num>0) return sequence[num-1];
    else return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
