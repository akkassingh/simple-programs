function factorial(n) {
  var x = 0;
  var y = 1;


  var series = [];
  series[0] = 0;
  series[1] = 1;
  var z;
  // console.log(series);
  if(n===0){
    console.log('Invalid Input');
  }
  else{
      for (var i = 2; i < n; i++) {
    series[i] = x + y;
    x = y;
    y = series[i];
  }
  // return series;
  console.log(series);

  }
}

module.exports = factorial;