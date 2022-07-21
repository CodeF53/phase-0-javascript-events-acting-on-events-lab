// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#e700ff";

document.addEventListener("keydown", function (event) {
    console.log(event);
    switch(event.key) {
        case "ArrowLeft":
            horizontalOffsetDodger(-1);
            break;
        case "ArrowRight":
            horizontalOffsetDodger(1);
            break;
        case "ArrowUp":
            verticalOffsetDodger(1);
            break;
        case "ArrowDown":
            verticalOffsetDodger(1);
            break;
    }
});  

function horizontalOffsetDodger(offset) {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + offset}px`;
}
function verticalOffsetDodger(offset) {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    dodger.style.bottom = `${bottom + offset}px`;
}

// for test cases
function moveDodgerLeft() {
    horizontalOffsetDodger(-1);
}
function moveDodgerRight() {
    horizontalOffsetDodger(1);
}