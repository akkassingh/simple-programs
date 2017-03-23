function another(num, pow) {
  var sum = 1;
  var multi = 1;
  if (num === 0) {
    console.log("Invalid input");
  } else {

    for (var i = 0; i < pow; i++) {
      // while(pow>0) {
      multi=multi*num;
      sum = sum + multi;
      // pow--;
    }
    // }
    return sum;
  }

  function power(num, pow) {
    var operator = 1;
    for (var c = 0; c < pow; c++) {
      operator *= num;
    }
    return operator;
  }
}

module.exports = another;