document.querySelector(".button.operator1").addEventListener("click", divide)
function divide() {
    let box1 = document.querySelector("#box1").value
    let box2 = document.querySelector("#box2").value
    document.querySelector("span").innerText = box1 / box2
}


document.querySelector(".button.operator").addEventListener("click", addition)
function addition() {

    let box1 = document.querySelector("#box1").value
    let box2 = document.querySelector("#box2").value
    document.querySelector("span").innerText = parseInt(box1) + parseInt(box2);

}

document.querySelector(".button.operator3").addEventListener("click", subtract)
function subtract() {
    let box1 = document.querySelector("#box1").value
    let box2 = document.querySelector("#box2").value
    document.querySelector("span").innerText = box1 - box2
}
document.querySelector(".button.operator2").addEventListener("click", multiply)
function multiply() {
    let box1 = document.querySelector("#box1").value
    let box2 = document.querySelector("#box2").value
    document.querySelector("span").innerText = box1 * box2
}
document.querySelector(".button.clear").addEventListener("click", clear)
function clear() {
    let box1 = document.querySelector("#box1").value = "";
    let box2 = document.querySelector("#box2").value = "";
    document.querySelector("span").innerText = "";
}




