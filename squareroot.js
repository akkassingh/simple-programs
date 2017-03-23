function squareroot(n) {
  var result;
  if (n < 0) {
    console.log('Invalid number,enter another number');
  } else {
    result = checkroot(n);
    if (result === '*') {
      console.log('Perfect square doesnot exist');
    } else {
      console.log('The square root of ' + n + ' is ' + result);
    }
  }
}

function checkroot2(n) {
  for (var i = 1; i < n; i++) {
    if (i * i === n) {
      return i;
    }
    if (i * i >= n) {
      return '*';
    }
  }
}

function checkroot(n) {
  for (var i = 1; i * i < n; i++) {}
  if (i * i === n) {
    return i;
  }
  return '*';
}
module.exports = squareroot;






// function checkroot(n) {
//   for (var i = 1; i < n; i++) {
//     if (i * i === n) {
//       return i;
//     }
//     if (i * i >= n) {
//       return '*';
//     }
//   }
// }
// module.exports = factorial;