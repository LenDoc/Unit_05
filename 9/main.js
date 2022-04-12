 //p
 function createP(text) {
    let p = document.createElement("p");
    p.innerHTML = text;
    document.body.appendChild(p)

}    
//button
function createButton(text) {
    let btn = document.createElement("button");
    btn.id = text;
    btn.innerHTML = "<b>" + text;
    document.body.appendChild(btn)

}
//input
function createInput(text) {
    let input = document.createElement("input");
    input.id = text;
    input.type = "number";
    document.body.appendChild(input)
}
let p1 = createP("CALCULATOR")
document.write("<br>");
let p2 = createP("Enter the numbers")
let inputElem1 = createInput("inputId1");
let inputElem2 = createInput("inputId2");
let buttonSum = createButton("sum");
let buttonMulti = createButton("multiplication");
let buttonSub = createButton("subtraction");
let buttonDiv = createButton("division");


let pResult = document.createElement("p");
document.body.appendChild(pResult)

function res(result) {
    pResult.innerHTML = `<br/> Result = ${result.toFixed(2)}`
}

sum.onclick = () => res((+inputId1.value) + (+inputId2.value))
multiplication.onclick = () => res((+inputId1.value) * (+inputId2.value))
subtraction.onclick = () => res((+inputId1.value) - (+inputId2.value))
division.onclick = () => {
    if (inputId2.value != 0 && inputId1.value != 0)
        return res(Math.round((+inputId1.value) / (+inputId2.value)))
}