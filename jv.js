const con = document.querySelector("#container");
const btn = document.querySelector("button");

function createGrid(numOfDiv){

    for(let j = 0; j < numOfDiv; j++){

        var divo = document.createElement("div");
        divo.setAttribute("id", "zeile");
        con.appendChild(divo);

            for(let i = 0; i < numOfDiv; i++){
                
                var divi = document.createElement("div");
                divi.setAttribute("id", "spalte");
                divo.appendChild(divi);
            }
        }
    
}
createGrid(16);

const zei = document.querySelector('#zeile');
const spa = document.querySelector('#spalte');
const tiles = document.querySelectorAll("#spalte");

tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.style.backgroundColor = 'black';

  });

});

btn.addEventListener("click", () => {
    tiles.forEach(tile => {
          tile.style.backgroundColor = '';
      
      });
})