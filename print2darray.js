function arrismine(arr) {
  // var arr = [[1,2,2],[1,2,3,45],[1,5,7,93]];
  var output = '';

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      output += arr[i][j] + ' ';
    }
    console.log(output);
    output = '';
  }
}
module.exports = arrismine;


























// for(var i=;i<arr.length;i++){
// 	var output='';
// 	for(var j=0;j<arr.length;j++){
// 		a+=arr[i][j]+' ';
// 	}
// 	console.log(a);
// }