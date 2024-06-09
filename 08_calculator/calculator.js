const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  return numbers.reduce((sum,number)=>sum+=number,0);
};

const multiply = function(...nums) {
  return nums.reduce((product,number)=>product*=number,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
  if (number==0) return 1;
  let product = 1;
  for(let i=number;i>0;i--){
    product*=i;
  }
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
