 function squareSum(numbers){
    const square=[];
    numbers.forEach(x=> {square.push(x*x)})
    return  square.length !==0 ?   square.reduce((a,b)=> a+b) : 0
  
  }
  
  module.exports = squareSum