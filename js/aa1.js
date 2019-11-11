var box1 = document.querySelectorAll(".box1");
var box2 = document.querySelectorAll(".box2");
var timer = setInterval(fun, 1000);
//var timer1 = setInterval(fun1, 5000);
var i = 0;

function fun() {
	//	for(i = 0; i < 100; i++) {
	if(i % 2 == 0) {
		//		function fun() {
			
		box1[0].style.background = "gold";
		box1[1].style.background = "gold";
		box1[2].style.background = "gold";
		box2[0].style.background = "red";
		box2[1].style.background = "red";
		box2[2].style.background = "red";
		console.log("0")
		//		}
		//		clearInterval(timer);
	} else {
		//		function fun1() {
		box1[0].style.background = "red";
		box1[1].style.background = "red";
		box1[2].style.background = "red";
		box2[1].style.background = "gold";
		box2[2].style.background = "gold";
		box2[0].style.background = "gold";
		console.log("1")
	}
	//		clearInterval(timer1);
	//	}
	i=i+1;
	console.log(i);
	if(i==7){
		i=0;
		console.log(i);
	}
}
//}
clearInterval(timer);
console.log("aaa")