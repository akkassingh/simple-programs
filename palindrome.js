function palindrome(a) {
var input=a.toString();
var i=input.length;
i=i-1;
var reverse="";
for (var x=i;x>=0;x--)
{
    reverse +=(input.charAt(x));
}
if(input === reverse)
{
	console.log("It is a palindrome.");
}
else
{
	console.log("It is not a palindrome");
}
}
module.exports = palindrome;
