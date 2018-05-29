var qtcircuitos = 0;
var qtfios = 0;
function clickitens(){
    qtfios++;
    qtcircuitos++;
    document.getElementById('qtfios').innerHTML = qtfios;
    document.getElementById('qtcircuitos').innerHTML = qtcircuitos;
}
document.getElementById("pointclick").onclick = function() {clickitens()};
document.getElementById("clickfig").onclick = function () {clickitens()};