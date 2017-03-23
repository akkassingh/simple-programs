function power(num, pow) {
  var sum = 1;
  if (num === 0) {
    console.log("Invalid input");
  }
  else {

    for (var i = 0; i<pow; i++) {
      while(pow>0)
      {
        sum = sum + Math.pow(num,pow);
        pow--;
      }
    }
     console.log(sum);
  }

}
module.exports = power;