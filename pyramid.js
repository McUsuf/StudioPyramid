function getColor(){
    let color = document.getElementById("favcolor");
    return color.value;
}

function drawPyramid(){

    let height = document.getElementById("vol").value;
    let pyramid = document.getElementById("pyramid");

    while(pyramid.lastChild){
        pyramid.lastChild.remove();
    }
    
    let link = document.createElement("link");
    link.href = "pyramid.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    for (var row = 0; row < height; row++) {
        let containerDiv = document.createElement("div");
        containerDiv.style.display = "flex"

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowBlocks = [];
        for (var i = 0; i < numSpaces; i++) {
            let block = document.createElement("div");
            block.className += ' space';
            rowBlocks.push(block);
        }
        for (var i = 0; i < numBricks; i++) {
            let block = document.createElement("div");
            block.className += ' brick';
            block.style.setProperty("background-color", getColor());
            rowBlocks.push(block);
        }

        rowBlocks.forEach(e => {
            containerDiv.appendChild(e);
        });

        pyramid.appendChild(containerDiv);
    }
}

function changeColor(){
    let pyramid = document.getElementById("pyramid");
    pyramid.children.forEach(e => e.style.setProperty("background-color", getColor()));
}

document.getElementById("favcolor").addEventListener('input', changeColor);
document.getElementById("vol").addEventListener('input', drawPyramid);