const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



function criaMap() {
   
    const container = document.createElement('div')
    container.classList.add("container")
    document.body.appendChild(container)
    for(let i = 0; i < map.length; i++){
        const linhaMap = document.createElement("div")
        linhaMap.classList.add("linhaMap")
        linhaMap.setAttribute('id',i)        
        container.appendChild(linhaMap)
        for(let j = 0; j < map[i].length; j++){
            const celulaMap = document.createElement("div")
            celulaMap.classList.add("celulaMap")
            celulaMap.classList.add(i+'-'+j)
            linhaMap.appendChild(celulaMap)
           
            if(map[i][j] === 'W'){
                celulaMap.classList.add("celulaMapW")
                const block = document.createElement("div")
                celulaMap.appendChild(block)

            } 
            else if (map[i][j] === ' '){
                celulaMap.classList.add("celulaMapEspaco")
            } 
            else if (map[i][j] === 'S'){
                const bola = document.createElement("div")
                bola.classList.add('bola')
                bola.setAttribute('id','moveBola')
                celulaMap.appendChild(bola)
                celulaMap.classList.add(i+'-'+j)
                
            } 
            else if (map[i][j] === 'F'){
                celulaMap.classList.add(i+'-'+j)
            } 
            else if (map[i][j] === ' '){
                celulaMap.classList.add(i+'-'+j)
                celulaMap.classList.add("celulaMapEspaco")
            }
        }
    }
}


criaMap()
    

let celulas = document.getElementsByClassName('celulaMap')
let linhas = document.getElementsByClassName('linhaMap')
const pegaBola = document.getElementById('moveBola')



    let i = 9
    let j = 0
    
    
document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    
    if (key === 'ArrowRight'){
        console.log('direita')
        if (linhas[i].children[j+1].className.includes('celulaMapW') !== true){
        linhas[i].children[j+1].appendChild(pegaBola) 
        j += 1
        win ()
    }
    } else if (key === "ArrowLeft"){
        console.log('esquerda')
        if (linhas[i].children[j-1].className.includes('celulaMapW') !== true){
        linhas[i].children[j-1].appendChild(pegaBola)
        j -= 1
        win ()
        }
    } else if (key === "ArrowUp"){
        console.log('cima')
        if (linhas[i-1].children[j].className.includes('celulaMapW') !== true){
        linhas[i-1].children[j].appendChild(pegaBola)
        i -= 1
        win ()
        }
    } else if (key === "ArrowDown"){
        console.log('baixo')
        if (linhas[i+1].children[j].className.includes('celulaMapW') !== true){
        linhas[i+1].children[j].appendChild(pegaBola)
        i += 1
        
        }
        win ()
    }
    
});


function win (){
    const alerta = document.querySelector('.pop-teste')
    if(pegaBola.parentElement.className === 'celulaMap 8-20'){
        ('Vitória')
        alerta.style.display = 'block';
    }
}

let botao = document.getElementsByClassName('botao')