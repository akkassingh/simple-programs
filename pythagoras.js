function pairs(m) {
	var n=m*m;
	var array=findsquare(n);
	// console.log(array);
	for(var i=0;i<=array.length;i++){
		for(var j=i+1;j<array.length;j++){
			var c=array[i]+array[j];
			if(check(c,array)=== true){
				var a=Math.sqrt(array[i]);
				var b=Math.sqrt(array[j]);
				console.log('[ '+a+", "+b+' ]');
			}
		}
	}
}
module.exports = pairs;



function findsquare(n) {
	var arr=[];
  for (var i = 1;i * i <=n; i++) {
  if (i * i<=n) {
    arr.push(i*i);
  }
}
  return arr;
}

function check(c,array){
	for(var i=1;i<=array.length;i++){
		if(c===array[i]){
			return true;;
		}
	}
	return false;

}






// function pairs(n) {
// 	var a=1;
// 	var b=1;
// 	var c;
// 	for(a=1;a<=n;a++){
// 		while(b<=n){
// 			if(c*c===((a*a)+(b*b))){
// 				console.log('['+a+','+b+']');
// 			}
// 			b++;
// 		}
// 	}
// }
// module.exports = pairs;







// function pairs(n) {
// 	var a=5;
// 	var b=4;
// 	var c;
// 	if(c*c===((a*a)+(b*b)))
// 	{
// 		console.log(c);
// 		// console.log('['+a+','+b+']');
// 	}
// 	else{
// 		console.log('baf');
// 	}
// }
// module.exports = pairs;

