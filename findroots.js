function roots(a,b,c){
if(b*b-4*a*c<0)
{
	console.log("the roots are complex");
}
else if(b*b-4*a*c==0)
{
	root=(-b/2*a);
	console.log('Root is real and it is: '+root)
}

else if(b*b-4*a*c>0)
{
	var root1= (-b+(Math.sqrt(b*b-4*a*c)))/2*a;
	var root2= (-b-(Math.sqrt(b*b-4*a*c)))/2*a;


	console.log('roots are real and they are: '+root1+' and '+root2);
}
}

module.exports = roots;