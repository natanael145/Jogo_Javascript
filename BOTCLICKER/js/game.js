var qtcircuitos = 0;
var qtfios = 0;

function clickitens(){
    qtfios++;
    qtcircuitos++;
    document.getElementById('qtfios').innerHTML = qtfios;
    document.getElementById('qtcircuitos').innerHTML = qtcircuitos;
}
document.getElementById("pointclick").onclick = function() {clickitens()};

function buyUpgrade(price1,price2,id){
	qtfios1 = qtfios - price1;
	qtcircuitos1 = qtcircuitos - price2;
	if (qtfios1 < 0 && qtcircuitos1 < 0) {
		myFunctionFailed();
		return;
	}
	qtfios = qtfios1;
	qtcircuitos = qtcircuitos1;
	document.getElementById('qtfios').innerHTML = parseInt(qtfios);
    document.getElementById('qtcircuitos').innerHTML = parseInt(qtcircuitos);
    myFunctionSucess();
    document.getElementById(id).outerHTML = "";
}
document.getElementByClassName('buttonbuy').onclick = function() {buyUpgrade()};

function myFunctionSucess() {
    var x = document.getElementById("snackbar-sucess");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function myFunctionFailed() {
    var x = document.getElementById("snackbar-failed");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}