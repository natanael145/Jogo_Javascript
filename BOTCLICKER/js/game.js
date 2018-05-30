//VARIABLES

var qtcircuitos = 0;
var qtfios = 0;
var qtenergia = 0;
var energiasec = 0;
var timeID;
var clickQT = 1;
var out = false;

// ==== ADD CIRCUITS AND THREADS WHEN CLICKED ==============
function clickitens(){
    myFunctionAdd();
    qtfios = qtfios + clickQT;
    qtcircuitos = qtcircuitos + clickQT;
    document.getElementById('qtfios').innerHTML = qtfios;
    document.getElementById('qtcircuitos').innerHTML = qtcircuitos;
}

//===========================================================

//========== BUY UPGRADE AND APPLY IT ON game.html ======================
function buyUpgrade(price1,price2,price3,id){
    if (qtfios >= price1 && qtcircuitos >= price2 && qtenergia >=price3) {
		var qtfios1 = qtfios - price1;
        var qtcircuitos1 = qtcircuitos - price2;
        var qtenergia1 = qtenergia - price3;
	    qtfios = qtfios1;
        qtcircuitos = qtcircuitos1;
        qtenergia = qtenergia1;
	    document.getElementById('qtfios').innerHTML = parseInt(qtfios);
        document.getElementById('qtcircuitos').innerHTML = parseInt(qtcircuitos);
        document.getElementById('qtenergia').innerHTML = parseInt(qtenergia);
        myFunctionSucess();
        appUpgrades(id,qtenergia);
        document.getElementById(id).outerHTML = "";
    }
    else{
        myFunctionFailed();
        return;
    }
    
}

//===========================================================

//=================FUNCTION SHOW SUCESS OR FAIL ALERT=============================
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
function myFunctionAdd() {
    var x = document.getElementById("snackbar-add");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//===========================================================
function setEnergy(energyAux){
    qtenergia = energyAux;
}
function getEnergy(){
    return qtenergia;
}
//====================== CHANGE ENERGY PER SEC ==========================
function addEnergy (qtenergiax,id) {
        qtenergiax =  qtenergiax + energiasec;
        document.getElementById('qtenergia').innerHTML = qtenergiax;
        setEnergy(qtenergiax);
        timeID = setTimeout("addEnergy("+qtenergiax+")",1000);
}
//===========================================================

// =========== VERIFY AN UPGRADE AND APPLY IT ==================
function appUpgrades(id,qtenergiaB){
    if (id == 'up1') {
        energiasec = 1;
        document.getElementById('qtenergiasec').innerHTML = energiasec;
        addEnergy(qtenergiaB,id);
    }
    else if (id == 'up2'){
        clearTimeout(timeID);
        energiasec = 6;
        document.getElementById('qtenergiasec').innerHTML = energiasec;
        addEnergy(qtenergiaB,id);
        clickQT = 2;
    }
}