let container = document.getElementById('container')
let main = document.getElementById('main')

let input = document.createElement('input')
input.type = 'number'
main.appendChild(input)

function createP(text) {
  let p = document.createElement('p')
  p.innerHTML = text
  container.appendChild(p)
}
let br = document.createElement('br')
container.appendChild(br)

let btn = document.createElement('button')
btn.innerHTML = '<b>' + 'Дізнатися про число'
main.appendChild(btn)

btn.onclick = function () {
  container.innerHTML = ''
  if (input.value > 0) {
    createP(`Число позитивне`)
  } else {
    createP(`Число негативне`)
  }

let flag = true
for (let i = 2; i < input.value; i++) {
  if (input.value % i == 0) {
    flag = false
    break // выйдем из цикла
  }
}
if (flag) createP('Число просте')
else createP('Число не просте')

if (input.value % 2 == 0) createP('Число ділиться без залишку на 2')
if (input.value % 3 == 0) createP('Число ділиться без залишку на 3')
if (input.value % 5 == 0) createP('Число ділиться без залишку на 5')
if (input.value % 6 == 0) createP('Число ділиться без залишку на 6')
if (input.value % 9 == 0) createP('Число ділиться без залишку на 9')
}