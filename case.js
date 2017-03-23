function caset(input) {
	// input='aSDawd';
	length = input.length;
	console.log(length);
	var b = '';
	var a = "This Is A Sample String";
	for (i = 0; i < input.length; i++) {
	  if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
	    b = b + input.charAt(i).toLowerCase();
	  } else
	    b = b + input.charAt(i).toUpperCase();
	}
	console.log(b);
}
module.exports = caset;

