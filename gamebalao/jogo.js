var timeid = 0;
function selectdif(){
    var dif = document.getElementById('dificult').value;
    window.location.href = 'jogo.html?'+dif;
}
function startgame(){
    var url = window.location.search;
    var dif = url.replace("?","");
    var time = 0;
    var baloesini = 0;
    var baloesest = 0;
    var baloesint = 0;
    switch (dif) {
        case '1':
            time = 120;
            baloesini = 80;
            baloesest = 0;
            break;
        case '2':
            time = 60;
            baloesini = 80;
            baloesest = 0;
            break;
        case '3':
            time = 30;
            baloesini = 80;
            baloesest = 0;
            break;
    
        default:
            break;
    }
    document.getElementById('time-crono').innerHTML = time;
    document.getElementById('qtbaloesini').innerHTML= baloesini;
    document.getElementById('estourados').innerHTML = baloesest;
    cria_baloes(baloesini);
    cont_time(time+1);
    
}
function cria_baloes(qtdbaloes){
    var aux=1;
    while (aux<=qtdbaloes) {
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '8px';
        balao.id = 'b'+aux;
        document.getElementById('cenario').appendChild(balao);
        balao.onclick = function(){estourar(this);};
        aux++;
       
    }

}

function cont_time(time){
    if(time<=0){
        clearTimeout(timeid);
        alert('GAME OVER, VOCE NAO TERMINOU A TEMPO!')
        return false;
    }
    time--;
    document.getElementById('time-crono').innerHTML=time;
    timeid = setTimeout("cont_time("+time+")",1000);

}
function estourar(balao){
    var id = balao.id;
    document.getElementById(id).setAttribute("onclick","");
    document.getElementById(id).src = 'imagens/balao_azul_pequeno_estourado.png';
    estourados(-1);
    checa();
}
function estourados(clique){
    var baloes_estourados= document.getElementById('estourados').innerHTML;
    var baloes_inteiros= document.getElementById('qtbaloesini').innerHTML;
   
    baloes_estourados = parseInt(baloes_estourados);
    baloes_inteiros = parseInt(baloes_inteiros);

    baloes_estourados = baloes_estourados - clique;
    baloes_inteiros = baloes_inteiros + clique;

    document.getElementById('estourados').innerHTML = baloes_estourados;
    document.getElementById('qtbaloesini').innerHTML = baloes_inteiros;
   
}
function checa(){
    var baloes_estourados = document.getElementById('estourados').innerHTML;
    var baloes_estourados_ini = 0;
    var baloes_int = document.getElementById('qtbaloesini').innerHTML;
    var baloes_inicial = 80;
    
    
    if(baloes_estourados == baloes_inicial && baloes_int==baloes_estourados_ini){
        alert('Você conseguiu estourar tudo,parabéns!');
        clearTimeout(timeid);
        return false;
    }
}