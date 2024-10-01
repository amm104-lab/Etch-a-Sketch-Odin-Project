const con = document.querySelector("#container");
const btn = document.querySelector("button");

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
    var tiles = document.querySelectorAll("#tile");
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
        tile.style.backgroundColor = 'black';
    
        });
    
    });

}
createGrid(16);



function deleteChild(){

let e = document.querySelector("div");

let child = e.lastElementChild;
while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
}}

function blank(){
    var tiles = document.querySelectorAll("#tile");
    tiles.forEach(tile => {
        tile.style.backgroundColor = '';
    });
    
}

function resize(){
    let size = Number(prompt("Choose size of the canvas"));
    deleteChild();
    createGrid(size);
}

