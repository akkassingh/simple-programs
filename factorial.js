function factorial(n) {
var fact=1;
  if(n<0) {
    console.log("Invalid Input,Enter another value");
  }
  else{
  	for (var i=2; i<=n;i++) {
        fact *= i;
    }
    // return fact;
    var factorial=fact;
    console.log("the factorial of "+n+" is "+factorial);

  }
}

  // return n * factorial(n - 1);

module.exports = factorial;

