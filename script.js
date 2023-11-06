// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
const audio = new Audio();
audio.src = "/sound/click.mp3";

const audio2 = new Audio();
audio2.src = "/sound/finish.mp3";

const audio3 = new Audio();
audio3.src = "/sound/delete.mp3";