
let layer; 
function addChessboard() {
    const chessboard = document.querySelector("#chessboard");

    let rows = 4;
    while (rows != 0) {
        // adding a row to the board
        const row = document.createElement("div");
        row.className = "row";
        chessboard.appendChild(row);

        // adding the cells to the row
        let cellSet1 = 4;
        while (cellSet1 != 0) {
            // white cell
            const cellWhite = document.createElement("div");
            cellWhite.className = "cell cell-white";
            cellWhite.onclick = function(){
                addSection(section1, "#layer1")
                layer = 1
            }
            row.appendChild(cellWhite);
        
            // black cell
            const cellBlack = document.createElement("div");
            cellBlack.className = "cell cell-black";
            cellBlack.onclick = function(){
                addSection(section2, "#layer2")
                layer = 2
            }
            row.appendChild(cellBlack);
            cellSet1--;
        }
        // -------------------

        // adding a row to the board
        const row1 = document.createElement("div");
        row1.className = "row row-slide";
        chessboard.appendChild(row1);

        // adding the cells to the row
        let cellSet2 = 4;
        while (cellSet2 != 0) {
            // black cell
            const cellBlack = document.createElement("div");
            cellBlack.className = "cell cell-black";
            cellBlack.onclick = function(){
                addSection(section3, "#layer3")
                layer = 3
            }
            row1.appendChild(cellBlack);
           
            // white cell
            const cellWhite = document.createElement("div");
            cellWhite.className = "cell cell-white";
            cellWhite.onclick = function(){
                addSection(section4, "#layer4")
                layer = 4
            }
            row1.appendChild(cellWhite);
            cellSet2--;
        }
        // -------------------

        rows--;
    }
}
addChessboard();
// --------------------------------------------
