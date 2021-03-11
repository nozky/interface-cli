'use strict'

// require 
const {calcProcess} = require('./utils/calc.js')

// Get from process.argv
let operator
let operand1 
let operand2 


// Using Readline 
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

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


const start = async () => {
  await question1()
  await question2()
  await question3()
  rl.close()

 const result =  calcProcess(operator, parseInt(operand1), parseInt(operand2))
 console.log(`Result = ${result}`)
}

start()

// TOTO: make this some kind of a class, so we can reuse this easily