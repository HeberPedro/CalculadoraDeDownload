function calcular() {
    let tam = document.querySelector('input#tam').value;
    let vel = document.querySelector('input#vel').value;
    let tipoTam = window.document.querySelector('#tamanhoArq'); //let tipoTam = document.getElementById("tamanhoArq");
    let tipoVel = window.document.querySelector('#velocidadeCon');
    let res = window.document.querySelector('div#res');
    let tamSelec = (tipoTam.options[tipoTam.selectedIndex]).value; 
    let velSelec = (tipoVel.options[tipoVel.selectedIndex]).value;
    let mensagemErro = "Dados Inválidos!!</br>Preencha novamente";
    let segTotal = 0;
    
    // transformar tamanho e velocidade p/ kbytes
    if(tamSelec=='mb') tam *= 1024;
        else if(tamSelec=='gb') tam *= 1024 * 1024;
    if(velSelec=='mbps') vel *= 1024;
    segTotal = tam / vel;

    if(Number.isNaN(segTotal)) res.innerHTML = mensagemErro;
        else if(Math.sign(segTotal) == -1) res.innerHTML = mensagemErro;
            else res.innerHTML = calcularTempo(segTotal);
}

function calcularTempo(segTotal) {
    // converte "segundos" p/ formato "horas:minutos:segundos"
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let tempo = " ";

    if (segTotal < 1) return tempo = "Menos de 1 (Um) Segundo!";
        else if(segTotal > 2592000) return tempo = "Mais de 1 (Um) Mês!";
            else {
                hora = Math.floor (segTotal/3600);
                minuto = Math.floor ((segTotal - (hora*3600)) /60);
                segundo = Math.floor (segTotal - ((hora*3600) + (minuto*60)));
                if(segTotal >= 3600) return tempo = `${hora} Hora(s) ${minuto} Min(s) ${segundo} Seg(s)`;
                    else if((segTotal < 3600) && (segTotal >= 60)) return tempo = `${minuto} Minuto(s) ${segundo} Seg(s)`;
                        else return tempo = `${segundo} Segundo(s)`;
            }
}