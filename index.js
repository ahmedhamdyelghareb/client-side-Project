var works=document.querySelector(".works")
var choise=document.querySelector(".choise")
var map=document.querySelector("map")

map.addEventListener("click",function(){
	choise.style.opacity = "0";
	choise.style.left = '-1300px';
	works.style.display='inline'
	
	setTimeout(function () {
		choise.style.display = "none"
		works.style.opacity = '1';
		works.style.right = '0px'

	}, 500);
	
	// console.log(event.target)
	// var target = event.target
})

var i=0;
var time=2000;
var d = document.querySelector('.slider')
var images=[]
images[0]= 'photos/p1.jpg';
images[1]= 'photos/p2.jpg';
images[2]= 'photos/p3.jpg';
images[3]= 'photos/p4.jpg';


function changeImg(){
d.style.backgroundImage = 'url('+images[i]+')'

if(i< images.length -1)
{
i++;
}
else
{
i=0;
}
setTimeout("changeImg()",time);
}
window.onload=changeImg;