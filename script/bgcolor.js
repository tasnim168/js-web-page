const colors = ["skyblue", "steelblue", "limegreen", "yellow", "maroon", "purple", "pink"];
const buttonContainer =document.getElementById("bg-btn");
let colorIndex = 0;
function changeBackgroundColor() {
    // Change the background color to the next color in the array
    document.body.style.backgroundColor = colors[colorIndex];
    
    // Update the color index, looping back to 0 when it exceeds the array length
    colorIndex = (colorIndex + 1) % colors.length;
}

// Add an event listener to the button to change the background color when clicked
buttonContainer.addEventListener("click", changeBackgroundColor);