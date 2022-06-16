var fact1 = document.querySelector('#buttons').a.addEventListener("click",ShowFact1);
document.getElementById("factdisplay").style.paddingLeft = "20px";
document.getElementById("factdisplay").style.paddingTop = "10px";
function ShowFact1() {
	document.getElementById("factdisplay").innerHTML = "Hot water will turn into ice faster than cold water.<br><img src='images/hotwater.jpg' alt='hotwater'>";

	document.getElementById("a").style.color = "#CDB4DB";
	document.getElementById("main").style.backgroundColor = "#FFC8DD";
	document.getElementById("a").style.borderColor = "#FFAFCC";
	document.getElementById("factdisplay").style.borderColor = "#BDE0FE";
	document.getElementById("main").style.borderColor = "#A2D2FF";
	document.getElementById("b").style.color = "black";
	document.getElementById("c").style.color = "black";
	document.getElementById("d").style.color = "black";
	document.getElementById("e").style.color = "black";
}

var fact2 = document.querySelector('#buttons').b.addEventListener("click",ShowFact2);
function ShowFact2() {
	document.getElementById("factdisplay").innerHTML = "Your heart stops for a millisecond when you sneeze.";
	document.getElementById("b").style.color = "DarkBlue";
	document.getElementById("main").style.backgroundColor = "#8D99AE";
	document.getElementById("b").style.borderColor = "#EDF2F4";
	document.getElementById("factdisplay").style.borderColor = "#EF233C";
	document.getElementById("main").style.borderColor = "#D90429";
	document.getElementById("a").style.color = "black";
	document.getElementById("c").style.color = "black";
	document.getElementById("d").style.color = "black";
	document.getElementById("e").style.color = "black";
}

var fact3 = document.querySelector('#buttons').c.addEventListener("click",ShowFact3);
function ShowFact3() {
	document.getElementById("factdisplay").innerHTML = "Your nostrils work one at a time.";
	document.getElementById("c").style.color = "#F72585";
	document.getElementById("main").style.backgroundColor = "#FFDDD2";
	document.getElementById("c").style.borderColor = "#3A0CA3";
	document.getElementById("factdisplay").style.borderColor = "#4361EE";
	document.getElementById("main").style.borderColor = "#4CC9F0";
	document.getElementById("b").style.color = "black";
	document.getElementById("a").style.color = "black";
	document.getElementById("d").style.color = "black";
	document.getElementById("e").style.color = "black";
}

var fact4 = document.querySelector('#buttons').d.addEventListener("click",ShowFact4);
function ShowFact4() {
	document.getElementById("factdisplay").innerHTML = "Rabbits can't puke.";
	document.getElementById("d").style.color = "#FF595E";
	document.getElementById("main").style.backgroundColor = "#FFCA3A";
	document.getElementById("d").style.borderColor = "#8AC926";
	document.getElementById("factdisplay").style.borderColor = "#1982C4";
	document.getElementById("main").style.borderColor = "#6A4C93";
	document.getElementById("b").style.color = "black";
	document.getElementById("c").style.color = "black";
	document.getElementById("a").style.color = "black";
	document.getElementById("e").style.color = "black";
}

var fact5 = document.querySelector('#buttons').e.addEventListener("click",ShowFact5);
function ShowFact5() {
	document.getElementById("factdisplay").innerHTML = "Pringles are dehydrated potato flakes pressed into their signature parabolic shape. That's why they're less greasy.";
	document.getElementById("e").style.color = "#006D77";
	document.getElementById("main").style.backgroundColor = "#DDE5B6";
	document.getElementById("e").style.borderColor = "#ADC178";
	document.getElementById("factdisplay").style.borderColor = "#A98467";
	document.getElementById("main").style.borderColor = "#6C584C";
	document.getElementById("b").style.color = "black";
	document.getElementById("c").style.color = "black";
	document.getElementById("d").style.color = "black";
	document.getElementById("a").style.color = "black";
}