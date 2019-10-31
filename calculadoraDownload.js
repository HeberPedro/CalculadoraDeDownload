// verifica se a tecla pressionada é "Enter"
$(document).keypress(function(e) {
    if(e.which == 13) $('#btncalculate').click();
});

function calculateData() {
    let size = document.querySelector('input#size').value;
    let vel = document.querySelector('input#vel').value;
    let secTotal = 0;
    const sizeFile = document.querySelector('select#sizeFile').value; 
    const connectionSpeed = document.querySelector('select#connectionSpeed').value; 
    const answer = document.querySelector('div#answer');
    const errorMessage = "Dados Inválidos!!</br>Preencha novamente";
    // transforma tamanho e velocidade p/ kbytes
    if(sizeFile=='mb') size *= 1024;
        else if(sizeFile=='gb') size *= 1024 * 1024;
    if(connectionSpeed=='mbps') vel *= 1024;
    secTotal = size / vel;
    // exceções
    if((vel==='') || (vel<=0)) answer.innerHTML = errorMessage;
        else if(Number.isNaN(secTotal)) answer.innerHTML = errorMessage;
            else if(secTotal<=0) answer.innerHTML = errorMessage;
                else answer.innerHTML = calculateTime(secTotal);
}

function calculateTime(secTotal) {
    // converte segundos p/ formato "Hora(s) Minuto(s) Segundo(s)"
    let hour=0, minute=0, second=0;

    if (secTotal < 1) return "Menos de 1 (Um) Segundo!";
        else if(secTotal > 2592000) return "Mais de 1 (Um) Mês!";
            else {
                hour = Math.floor (secTotal/3600);
                minute = Math.floor ((secTotal - (hour*3600)) /60);
                second = Math.floor (secTotal - ((hour*3600) + (minute*60)));
                if(secTotal >= 3600) return `${hour} Hora(s) ${minute} Min(s) ${second} Seg(s)`;
                    else if((secTotal < 3600) && (secTotal >= 60)) return `${minute} Minuto(s) ${second} Seg(s)`;
                        else return `${second} Segundo(s)`;
            }
}