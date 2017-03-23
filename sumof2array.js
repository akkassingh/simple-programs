function sumofarray(arr1, arr2) {

  for (var i = 0; i < arr1.length; i++) {
    var output = '';
    for (var j = 0; j <= arr1.length; j++) {
      output += arr1[i][j] + arr2[i][j] + ' ';

    }
    console.log(output);
  }
}
module.exports = sumofarray;
