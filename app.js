'use strict'

// require 
const {calcProcess} = require('./utils/calc.js')

// Variables
let operator
let operand1 
let operand2 


// Using Readline 
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// I use promise, so i can use this asynchronous
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Operator? ', (answer) => {
      operator = answer;
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Operand 1? ', (answer) => {
      operand1 = answer
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Operand 2? ', (answer) => {
      operand2 = answer
      resolve()
    })
  })
}

// async/await 
const start = async () => {
  await question1()
  await question2()
  await question3()
  rl.close()

 const result =  calcProcess(operator, parseInt(operand1), parseInt(operand2))
 console.log(`Result = ${result}`)
}

// run
start()

// TODO: make this some kind of a class, so we can reuse this easily