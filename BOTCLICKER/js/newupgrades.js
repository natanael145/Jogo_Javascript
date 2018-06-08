// ========================= UPGRADE 3 =====================================================
var up3 = document.createElement("div"); 
up3.className = "upgrade";
up3.id = 'up3';
up3.style.webkitAnimation= "bounceInUp 2s";
up3.style.animation = "bounceInUp 2s";
var contentUp3 = document.createElement("p");
contentUp3.className = "p-font-upgrade";
contentUp3.innerHTML = "Recolha os circuitos e placas-mãe dos velhos fliperamas para melhorar sua AI(Inteligência Artificial)!<br>(CLICKS 2x)<br>(ENERGY 2x)"
up3.appendChild(contentUp3);
var threads = document.createElement("p");
threads.className = "p-font-priceUpgrade";
threads.innerHTML = "THREADS : "
var circuits = document.createElement("p");
circuits.className = "p-font-priceUpgrade";
circuits.innerHTML = "CIRCUITS : ";
var energy = document.createElement("p");
energy.className = "p-font-priceUpgrade";
energy.innerHTML = "ENERGY : ";
var price1Up3 = document.createElement("span");
price1Up3.className = "priceA1";
price1Up3.innerHTML = 700;
var price2Up3 = document.createElement("span");
price2Up3.className = "priceB1";
price2Up3.innerHTML = 875;
var price3Up3 = document.createElement("span");
price3Up3.className = "priceC1";
price3Up3.innerHTML = 750;
var a = document.createElement("a");
a.href = "#";
var buttonbuy = document.createElement("img");
buttonbuy.className = "buttonbuy";
buttonbuy.src = "imgs2/upgradebutton.png";
buttonbuy.setAttribute("onclick","buyUpgrade(700,875,750,'up3')");
up3.appendChild(threads);
up3.appendChild(circuits);
up3.appendChild(energy);
threads.appendChild(price1Up3);
circuits.appendChild(price2Up3);
energy.appendChild(price3Up3)
a.appendChild(buttonbuy);
up3.appendChild(a);
//==========================================================================================