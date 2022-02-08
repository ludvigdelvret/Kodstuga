const width = 24;
const height = 24;

let previousColor = "black"
let selectedColor = "black"


let mouseIsDown = false;


window.onload = () => {

    document.body.onmousedown = () => {
        mouseIsDown = true;
    }
    document.body.onmouseup = () => {
        mouseIsDown = false;
    }

    const colors = document.getElementById("colors");
    colors.childNodes.forEach((colorElement) => {
        colorElement.onclick = () => {
            selectedColor = colorElement.style.backgroundColor;
        }
    })

    const canvas = document.getElementById("canvas")
    for (let i = 0; i < height; i++) {
        const row = document.createElement("div")
        row.className="row"
        canvas.appendChild(row)
        for (let j = 0; j < width; j++) {
            const cell = document.createElement("div")
            cell.className = "cell"
            cell.onclick = () => {
                cell.style.backgroundColor = selectedColor;
                previousColor = selectedColor;
            }
            cell.onpointermove = () => {
                if (mouseIsDown){
                    cell.style.backgroundColor = selectedColor;
                    previousColor = selectedColor;
                }
            }

            cell.onmouseenter = () => {
                previousColor = cell.style.backgroundColor;
                cell.style.backgroundColor = selectedColor;
            }
            cell.onmouseleave = () => {
                cell.style.backgroundColor = previousColor;
            }
            row.appendChild(cell)
        }
    }
} 