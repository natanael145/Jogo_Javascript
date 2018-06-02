//VARIABLES
var qtcircuitos = 0;
var qtfios = 0;
var qtenergia = 0;
var energiasec = 0;
var timeID;
var clickQT = 100;
var aux = 3;

// ========= BACK TO NORMAL IMG ONMOUSEDOWN ==============
function setNoClickFlip() {
    var element = document.getElementById("img-click");
    element.setAttribute("src", "imgs/clickFlip.png");
}
// ==== ADD CIRCUITS AND THREADS WHEN CLICKED ==============
function clickitens() {
    snackAdd();
    var element = document.getElementById("img-click");
    element.setAttribute("src", "imgs/noclickFlip.png");
    qtfios = qtfios + clickQT;
    qtcircuitos = qtcircuitos + clickQT;
    document.getElementById('qtfios').innerHTML = qtfios;
    document.getElementById('qtcircuitos').innerHTML = qtcircuitos;
}

//===========================================================

//========== BUY UPGRADE AND APPLY IT ON game.html ======================
function buyUpgrade(price1, price2, price3, id) {
    if (qtfios >= price1 && qtcircuitos >= price2 && qtenergia >= price3) {
        var qtfios1 = qtfios - price1;
        var qtcircuitos1 = qtcircuitos - price2;
        var qtenergia1 = qtenergia - price3;
        qtfios = qtfios1;
        qtcircuitos = qtcircuitos1;
        qtenergia = qtenergia1;
        document.getElementById('qtfios').innerHTML = parseInt(qtfios);
        document.getElementById('qtcircuitos').innerHTML = parseInt(qtcircuitos);
        document.getElementById('qtenergia').innerHTML = parseInt(qtenergia);
        snackSucess();
        appUpgrades(id, qtenergia);
        document.getElementById(id).outerHTML = "";
        
    }
    else {
        snackFailed();
        return;
    }
}

//===========================================================

//=================FUNCTION SHOW SUCESS OR FAIL ALERT=============================
function snackSucess() {
    var x = document.getElementById("snackbar-sucess");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function snackFailed() {
    var x = document.getElementById("snackbar-failed");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function snackAdd() {
    var x = document.getElementById("snackbar-add");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function snackNewUpgrade() {
    var x = document.getElementById("snackbar-newupgrade");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function showUpgradesOpen(){
    var x = document.getElementById("upgrades-visible");
    var y = document.getElementById("upgrades");
    x.style.visibility = "hidden";
    x.style.padding = 0;
    x.style.paddingBottom = 0;
    y.className="col-lg-3 animation";
    y.style.visibility = "visible";
}
function showUpgradesClose(){
    var x = document.getElementById("upgrades-visible");
    var y = document.getElementById("upgrades");
    x.style.visibility = "visible";
    x.style.padding = 20;
    x.style.paddingBottom =40;
    y.className="col-lg-3";
    y.style.visibility = "hidden";
}
//===========================================================
function setEnergy(energyAux) {
    qtenergia = energyAux;
}
function getEnergy() {
    return qtenergia;
}
//====================== CHANGE ENERGY PER SEC ==========================
function addEnergy(qtenergiax, id) {
    qtenergiax = qtenergiax + energiasec;
    document.getElementById('qtenergia').innerHTML = qtenergiax;
    setEnergy(qtenergiax);
    timeID = setTimeout("addEnergy(" + qtenergiax + ")", 1000);
}
//===========================================================

// =========== VERIFY AN UPGRADE AND APPLY IT ==================
function appUpgrades(id, qtenergiaB) {
    if (id == 'up1') {
        energiasec = 133;
        document.getElementById('qtenergiasec').innerHTML = energiasec;
        addEnergy(qtenergiaB, id);
        document.getElementById("upgrades").appendChild(up3);
        snackNewUpgrade();
    }
    else if (id == 'up2') {
        clearTimeout(timeID);
        energiasec = 333;
        document.getElementById('qtenergiasec').innerHTML = energiasec;
        addEnergy(qtenergiaB, id);
        clickQT = 232;
        snackNewUpgrade();
    }
}