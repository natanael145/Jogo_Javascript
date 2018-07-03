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
    document.getElementById('clickQT').innerHTML = clickQT;
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
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
}
function snackNewUpgrade() {
    var x = document.getElementById("snackbar-newupgrade");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function showUpgradesOpen(){
    var upgradesVisible = document.getElementById("upgrades-visible");
    var upgradesHidden = document.getElementById("upgrades");
    var imgUpgrade = document.getElementById("img-upgrade");
    var iconShow = document.getElementById("icon-show");
    upgradesVisible.style.visibility = "hidden";
    upgradesVisible.style.padding = 0;
    upgradesVisible.style.paddingBottom = 0;
    upgradesVisible.style.webkitAnimation = "none";
    upgradesHidden.className="col-lg-3 animationFadeDown";
    upgradesHidden.style.visibility = "visible";
    imgUpgrade.style.webkitAnimation = "none";
    imgUpgrade.style.animation = "none";
    iconShow.style.webkitAnimation = "none";
    iconShow.style.animation = "none";
}
function showUpgradesClose(){
    var upgradesVisible = document.getElementById("upgrades-visible");
    var upgradesHidden = document.getElementById("upgrades");
    var imgUpgrade = document.getElementById("img-upgrade");
    var iconShow = document.getElementById("icon-show");
    upgradesVisible.style.padding = 20;
    upgradesVisible.style.paddingBottom =40;
    upgradesVisible.style.visibility = "visible";
    upgradesVisible.style.webkitAnimation = "fadeInUp2 1s";
    upgradesVisible.style.animation = "fadeInUp2 1s";
    upgradesHidden.className="col-lg-3";
    upgradesHidden.style.visibility = "hidden";
    imgUpgrade.style.webkitAnimation = "fadeInUp3 1s";
    imgUpgrade.style.animation = "fadeInUp3 1s";
    iconShow.style.webkitAnimation = "fadeInUp4 1s";
    iconShow.style.animation = "fadeInUp4 1s";
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