"use strict";
//HOMEWORK_03
//___TASK_01______________________________________________________________________________________
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, 
// у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// _________________________________________________________________________________________
let name1stChild = prompt('Введіть ім-я першої дитини:', '')
let candiesFor1stChild = parseInt(prompt('Введіть кількість цукерок у першої дитини:', '')!)
let name2ndChild = prompt('Введіть ім-я другої дитини:', '')
let candiesFor2ndChild = parseInt(prompt('Введіть кількість цукерок у другої дитини:', '')!)
let result: string = ''
if (candiesFor1stChild > candiesFor2ndChild) {
  result = `${name1stChild} має більше цукерок.`
} else if (candiesFor2ndChild > candiesFor1stChild)
  result = `${name2ndChild} має більше цукерок.`
  else {
    result = 'У обох дітей однакова кількість цукерок.'
}
document.write(result)
// ___TASK_02______________________________________
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо 
// у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// _______________________________________________________
const productPrice = parseFloat(prompt('Product Price', '')!)
const clientMoney = parseFloat(prompt('Client Money', '')!)
const loteryPrice: number = 4
if (clientMoney < productPrice){
  const moneyRequired = productPrice - clientMoney
  document.write(`Недостатньо коштів. Ще потрібно: ${moneyRequired.toFixed(2)}`)
} else{
  const change = clientMoney - productPrice
 if (change > 0){
  if(change >= loteryPrice)
    document.write(`Ваша решта ${change.toFixed(2)} грн. 
      Ви можете придбати лотерею, вартість ${loteryPrice} грн.`)
  else document.write(`Ваша решта ${change.toFixed(2)} грн.`)
 } else document.write('Дякуємо за покупку') 
}
//___TASK_03___________________________________
//  Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
// ___________________________________________________
const randomNum = 1 + Math.floor(Math.random()* 5)
let userNum = parseInt(prompt('Pick a number from 1 to 5 = ', '')!)
if(userNum === randomNum)
  document.write('Ok')
else{
  userNum = parseInt(prompt('not guessed! your second attempt = ', '')!)
  if(userNum === randomNum)
   document.write('Good')
  else 
    document.write(`Not guessed! The random number is = ${randomNum}`)
}
//___TASK_04__________________________________________
// З клавіатури вводиться вік людини. Вивести на екран ким вона є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// _________________________________________________________
let userInput = prompt(`Enter your age:`, '')
let result: string = ''
if (userInput === null || userInput === ''|| isNaN (parseInt(userInput)) )
  result = "Incorrect data. Enter the number, please"
else { 
  const userAge = parseInt(userInput)
  if (userAge < 2 || userAge > 120)
  result = 'Incorrect numbr. Enter the number from 2 to 120'
  else if (userAge < 7) 
    result = 'Kindergarten child'
  else if (userAge <= 17) 
    result = 'Teenager'
  else if (userAge<= 22) 
    result = 'Student'
  else if (userAge <= 65) 
    result = 'Worker'
  else 
    result = 'Retired person'
  }
document.write(result)
console.log(result)
//___TASK_05________________________________________________________________________________
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, 
// С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
// __________________________________________________________________________________________
const  category = prompt('Category')
let vehType: string
switch (category?.toUpperCase()) {
  case 'A': 
    vehType = 'motorcycle'
    break
  case 'B': 
    vehType = 'car'
    break
  case 'C': 
    vehType = 'truck'
    break 
  default:
    vehType = 'unknow vehicle'
    break
}
document.write(`vehType : ${vehType}`)
//___TASK_06__________________________________________________
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// __________________________________________________________
let week: string = ''
const dayNum = parseInt(prompt('Enter the day of the week number')!)
if (isNaN(dayNum) || dayNum <1 || dayNum >7) 
week = "Incorrect data. enter the number from 1 to 7 "
else {
  switch (dayNum) {
    case 1:
      week = "Sunday"
      break
    case 2:
      week = "Monday"
      break
    case 3:
      week = "Tuesday"
      break
    case 4:
      week = "Wednesday"
      break
    case 5:
      week = "Thursday"
      break
    case 6:
      week = "Friday"
      break
    case 7:
      week = "Saturday"
      break
  }
}
 document.write(week)
//___TASK_07_______________________________________________
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
// _____________________________________________________________

// ----------------------------
// if else
//------------------------------ 
const numMonth = parseInt(prompt('введіть номер місяця') ?? '0') 
let season: string = ''
if (isNaN(numMonth) || numMonth < 1 || numMonth > 12) 
  season = "Невірний номер місяця! Введіть число від 1 до 12"
  else if (numMonth >= 3 && numMonth <= 5) {
  season = "Весна"
} else if (numMonth >= 6 && numMonth <= 8) {
  season = "Літо"
} else if (numMonth >= 9 && numMonth <= 11) {
  season = "Осінь"
} else {
  season = "Зима"
}
console.log(`Місяць ${numMonth} — пора року: ${season}`)
document.write(`Місяць ${numMonth} — пора року: ${season}`)
// ------------------------------
// switch
// ------------------------------
// const numMonth = parseInt(prompt('Enter the month number from 1 to 12')!) ||0
// let season = ''
// switch (true){
//   case numMonth >= 3 && numMonth <= 5:
//     season = 'Spring'
//     break
//   case numMonth >= 6 && numMonth <= 8:
//     season = 'Summer'
//     break
//   case numMonth >= 9 && numMonth <= 11:
//     season = 'Autumn'
//     break
//   case numMonth === 1 || numMonth === 2 || numMonth === 12:
//     season = 'Winter'
//     break
//     default:
//     season = 'wrong month number. Enter the number from 1 to 12'
// }
// console.log(`Month ${numMonth} - Time of year: ${season}`)
// document.write(`Month ${numMonth} - Time of year: ${season}`)
