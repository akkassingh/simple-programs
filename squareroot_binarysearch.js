function squareroot(n) {
  var result;
  if (n < 0) {
    console.log('Invalid number,enter another number');
  } else {
    result = binarysearch(n);
    if (result === undefined) {
      console.log('Perfect square doesnot exist');
    } else {
      console.log('The square root of ' + n + ' is ' + result);
    }
  }
}
module.exports = squareroot;


function binarysearch(n) {
  var low = 1;
  var high = n;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (mid * mid === n) {
      return mid;
    }
    else if(mid * mid < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}





// function binarysearch2(n){
// 	var x=n;
//     var low = 1;
//     var high = x;
//     var sol;
//     var mid;

//     while (low <= high) {
//         mid = low + (high - low) / 2;
//         if (mid <= x / mid) {
//             low = mid + 1;
//             sol = mid;
//         }
//         else
//             high = mid - 1;
//     }
//     return sol;
// }