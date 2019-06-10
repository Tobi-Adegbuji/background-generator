// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient")


// console.log(css);
// console.log(color1); //testing if variables are correct
// console.log(color2)

// function setGradient(){
// body.style.background = 
// "linear-gradient(to right, " 
// + color1.value 
// + ", " 
// + color2.value 
// + ")";

// 	css.textContent = body.style.background + ";";
// 	//textContent add tex content to whatever you want.
// 	//You will notice that react makes these things alot easier!
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// //im still unsure why we dont call the function for setGradient inside the addEventListener
// //we could have also put oninput = "setGradient()" inisde the input tags in the html.
// //this is not recommened because you are adding js to html 



















var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


