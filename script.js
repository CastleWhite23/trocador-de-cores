
let bt = document.querySelector(".clique")
let btAnt = document.querySelector(".cor-ant")

var historicoCores = []
var h1 = document.querySelector(".cor-fundo")

bt.addEventListener('click', mudar_cor)
btAnt.addEventListener('click', cor_ant)



function mudar_cor() {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color
    h1.innerHTML = "Backgroud-color: " + color

    historicoCores.push(color);
    console.log(historicoCores)
}

function cor_ant() {
    historicoCores.pop();
   
    if(historicoCores.length != 0){
        h1.innerHTML = "Background-color: " + historicoCores[historicoCores.length - 1]
        document.body.style.backgroundColor = historicoCores[historicoCores.length - 1]
        console.log(historicoCores)
    }else{
        h1.innerHTML = "Background-color: " + "#5813fa"
        document.body.style.backgroundColor = '#5813fa'
    }
        
    
}



