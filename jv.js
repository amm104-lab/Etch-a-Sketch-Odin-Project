const con = document.querySelector("#container");
const btn = document.querySelector("button");
const rango = document.querySelector(".ranCo");
const tears = document.querySelector(".Onion");
let crying = false;
let randon = false;

function colorChoice(){
    var tiles = document.querySelectorAll("#tile");
        tiles.forEach(tile => {
            if(randon===true){
                if(crying == true){
                    tile.addEventListener('mouseenter', () => {
                        tile.style.backgroundColor = 
                        `#${genRanHex(6)}` + "50"
                    })
                }
                else{
                tile.addEventListener('mouseenter', () => {
                    tile.style.backgroundColor = 
                    `#${genRanHex(6)}`
                })}
            }
            else{
                if(crying == true){
                    tile.addEventListener('mouseenter', () => {
                        tile.style.backgroundColor = 
                        `#000000` + "50"
                    })
                }
                else{
                tile.addEventListener('mouseenter', () => {
                    tile.style.backgroundColor = 
                    `#000000`
                })}}
})}

rango.addEventListener("click", () => {
    randon = !randon;
    colorChoice();
})

tears.addEventListener("click", () => {
    crying = !crying;
    colorChoice();
})

function createGrid(numOfDiv){   
    for(let j = 0; j < numOfDiv; j++){
        var divo = document.createElement("div");
        divo.setAttribute("id", "zeile");
        con.appendChild(divo);

            for(let i = 0; i < numOfDiv; i++){                
                var divi = document.createElement("div");
                divi.setAttribute("id", "tile");                
                divo.appendChild(divi);
            }
    }
    colorChoice();
}

createGrid(16);

function deleteChild(){
    let e = document.querySelector("#container");
    let child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function blank(){
    var tiles = document.querySelectorAll("#tile");

    tiles.forEach(tile => {
        tile.style.backgroundColor = ''
    })
}

function resize(){
    let size = Number(prompt("Choose size of the canvas"));
    
    deleteChild();
    createGrid(size);
}

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');