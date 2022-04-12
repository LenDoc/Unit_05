 //1
 function FisrtTask() {
    let x = 6,
      y = 15,
      z = 4
    x += y - x++ * z
    console.log('x= ', x)
    z = --x - y * 5
    console.log('z= ', z)
    y /= x + (5 % z)
    console.log('y= ', y)
    z = x++ + y * 5
    console.log('z= ', z)
    x = y - x++ * z
    console.log('x= ', x)
  }
  //FirstTask()
  //2
  function SecondTask() {
    let first = prompt('Введіть цілочисельне значення №1', '')
    let second = prompt('Введіть цілочисельне значення №2', '')
    let third = prompt('Введіть цілочисельне значення №3', '')
    console.log('Ви ввели дані числа: ', first, ' ', second, ' ', third)
    let result = Number(
      (parseInt(first) + parseInt(second) + parseInt(third)) / 3,
    )
    console.log('Середнє арифметичне: ', Math.round(result).toFixed(2))
  }
  //SecondTask()
  //3
  function VolumeAndSquare() {
    let template = document.querySelector('#template')
    let templateClone = template.content.cloneNode(true)
    let radius = prompt('Введіть значення радіуса циліндра', '')
    let height = prompt('Введіть цілочисельне висоти циліндра', '')
    if (radius < 0) radius = -radius
    if (height < 0) height = -height
    templateClone.querySelector('#radius').textContent = radius
    templateClone.querySelector('#height').textContent = height

    let Volume =Math.round(Math.PI * Math.pow(radius, 2) * height).toFixed(2)
    let Square = Math.round(2 * Math.PI * (radius + height)).toFixed(2)
    templateClone.querySelector('#volume').textContent = Volume
    templateClone.querySelector('#square').textContent = Square
    document.body.appendChild(templateClone)
  }
  //VolumeAndSquare()
  //4
  function FourthTask() {
    let a = prompt('Введіть число А', '')
    let b = prompt('Введіть число В, яке більше за А', '')
    var sum = 0

    if (a < b) {
      let title = document.createElement('h2')
      title.innerHTML = `Ви ввели проміжок: [ ${a};${b} ]`
      document.body.appendChild(title)
    } else {
      let title = document.createElement('h2')
      title.innerHTML = 'Ви ввели некоректні дані'
      document.body.appendChild(title)
    }

    while (a < b) {
      a++
      if (a < b) sum += a
      if (a % 2 != 0) {
        let resultNum = document.createElement('h3')
        resultNum.innerHTML = `<br> Непарне значення: ${a}`
        document.body.appendChild(resultNum)
      }
    }
    let Sum = document.createElement('h3')
    Sum.innerHTML = `Сумма: ${sum}`
    document.body.appendChild(Sum)
  }
  //FourthTask()
  function factorial(n) {
    //return (n != 1) ? n * factorial(n - 1) : 1;
    let res = 1
    while (n--) res *= n + 1
    return res
  }
  function fiveTask() {
    let x = prompt('Введіть число ', '')
    let result = factorial(x)

    let number = document.createElement('h3')
    number.innerHTML = `Ви ввели таке число: ${x}`
    document.body.appendChild(number)
    let newResult = document.createElement('h2')
    newResult.innerHTML = `Результат ${x}! = ${result}`
    document.body.appendChild(newResult)
  }
  //fiveTask()

  //6
  function SixTask() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        document.write('*\n')
      }
      let br = document.createElement('br')
      document.body.appendChild(br)
    }
    document.write('<hr>')

    for (let i = 0; i< 8; i++) {
      for (let j = 0; j < i + 1; j++) {
        document.write('*\n')
      }
      document.write('<br>')
    }
    document.write('<hr>')

    var line = 8 // Quantity of lines
    var space = 7 // Quantity of gaps in the first line
    var star = 1 // Quantity of stars in the first line

    for (let i = 0; i < line; i++) {
      for (let j = 0; j < space; j++) {
        document.write('&nbsp\n')
      }
      for (let k = 0; k < star; k++) {
        document.write('*')
      }
      space -= 1
      star += 2
      document.write('<br>')
    }
    document.write('<hr>')

    let size = 11
    let center = size / 2

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i <= center) {
          //верхняя половина
          if (j >= center - i && j <= center + i) document.write('*')
          else document.write('&nbsp')
        } else {
          //нижняя половина
          if (j >= center + i - size + 1 && j <= center - i + size - 1)
            document.write('*')
          else document.write('&nbsp')
        }
      }
      document.write('<br>')
    }
  }
  //SixTask()
  //7
  function SevenTask() {
    let N = 12
    let array = []
    let odd = []
    let sum = 0

    for (i = 0; i < N; i++) {
      let a = Math.round(Math.random() * 100)
      array.push(a)
    }

    let min = array[0]
    let max = min
    for (i = 0; i < N; i++) {
      if (array[i] > max) max = array[i]
      if (array[i] < min) min = array[i]

      if (array[i] % 2 != 0) odd.push(array[i])
      sum += array[i]
    }
    const resultOdd = array.filter((el) => el % 2 != 0)
    console.log(resultOdd)
    let averenge = sum / N
    console.log(sum)
    console.log(odd)

    let arr = document.createElement('h3')
    arr.innerHTML = `Даний масив: [${array}]`
    document.body.appendChild(arr)
    let max1 = document.createElement('h4')
    max1.innerHTML = `Максимальне значення за першим варіантом: ${max}`
    document.body.appendChild(max1)

    let max2 = document.createElement('h4')
    max2.innerHTML = `Максимальне значення за другим варіантом: ${Math.max(
      ...array,
    )}`
    document.body.appendChild(max2)

    let min1 = document.createElement('h4')
    min1.innerHTML = `Мінімальне значення за першим варіантом: ${min}`
    document.body.appendChild(min1)

    let min2 = document.createElement('h4')
    min2.innerHTML = `Мінімальне значення за другим варіантом: ${Math.min(
      ...array,
    )}`
    document.body.appendChild(min2)

    let aver = document.createElement('h4')
    aver.innerHTML = `Середнє арифметичне значення: ${Math.round(averenge).toFixed(2)}`
    aver.className = 'bg'
    document.body.appendChild(aver)

    let odd1 = document.createElement('h4')
    odd1.innerHTML = `Непарні значення першим способом: [${odd}]`
    odd1.className = 'bg'
    document.body.appendChild(odd1)

    let odd2 = document.createElement('h4')
    odd2.innerHTML = `Непарні значення другим способом: [${resultOdd}]`
    odd2.className = 'bg'
    document.body.appendChild(odd2)

    let summa = document.createElement('h4')
    summa.innerHTML = `Загальна сума елементів: ${sum}`
    summa.className = 'bg2'
    document.body.appendChild(summa)
  }
//SevenTask()
  function EightTask(){
  function arrayTable(rows, cols) {
    // создаём строки
    var newArray = new Array(rows)

    for (var i = 0; i < rows; i++) {
      // создаём столбцы
      newArray[i] = new Array(cols)
      //инициализируем ячейки значением
      for (var j = 0; j < cols; j++) {
        let a = Math.floor(Math.random() * (100 - 20 + 1) - 20)
        newArray[i][j] = a
      }
    }
    return newArray
  }
    const array = arrayTable(5, 5)
      console.log(array)
    let arr = document.createElement('h3')
  arr.innerHTML = `Даний масив:`
  document.body.appendChild(arr)

    
    let newCopy = []
    newCopy = Array.from(array)
    for (let i = 0; i < 5; i++) {
      let arr = document.createElement('h3')
      arr.innerHTML = `[${array[i]}]`
      document.body.appendChild(arr)
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        if (newCopy[i][j] < 0) 
          newCopy[i][j] = 0
        else newCopy[i][j] = 1

        //вывод заполненной Ячейки сразу
      }
    }
    }
    let text = document.createElement('h3')
    text.innerHTML = `На головній діагоналі всі числа зі знаком\n (-) замінити на 0, інші на 1`
    document.body.appendChild(text)
   
    for (let i = 0; i < 5; i++) {
      let arr = document.createElement('h3')
      arr.innerHTML = `[${newCopy[i]}]`
      document.body.appendChild(arr)
  

        //вывод заполненной Ячейки сразу
      
    
    }

    console.log(newCopy)
}
  
EightTask()