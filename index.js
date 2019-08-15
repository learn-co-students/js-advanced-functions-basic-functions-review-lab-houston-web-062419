// Your code here
function saturdayFun(activity='roller-skate') {
    let string = `This Saturday, I want to ${activity}!`
    console.log(`This Saturday, I want to ${activity}!`)
    return string
}

function mondayWork(activity = "go to the office") {
    let string = `This Monday, I will ${activity}.`
    return string
}

function wrapAdjective(highlight = "*") {
    
    return function wrap(parameter ="special"){
        let string = `You are ${highlight}${parameter}${highlight}!`
        return string
    }
}

let Calculator = {
    add: function add(a,b){return a+b},
    subtract: function subtract(a,b) {return a-b},
    multiply: function multiply(a,b) {return a*b},
    divide: function divide(a,b) {return a/b}
}

function actionApplyer(integer=0, array) {
    let result = array.length ? (((integer*2)+1000)%7) : integer
    return result
}