function saturdayFun(str = "roller-skate") {
	return "This Saturday, I want to " + str + "!"
}
function mondayWork(str = "go to the office") {
	return "This Monday, I will " + str + "."
}
function wrapAdjective(flair = "*") {
	return function(str = "special") {
		return "You are " + flair + str + flair + "!"
	}
}
const Calculator = {
	 add: function (num1, num2){ return num1 + num2},
	 subtract: function (num1, num2){ return (num1 - num2)},
	 multiply: function (num1, num2){ return num1 * num2},
	 divide: function (num1, num2){ return num1 / num2}

}
function actionApplyer(int, arr = []) {
	if (arr.length == 0)
		return int
	else{
		arr.forEach(func => int = func(int))
	} 
	return int

		// return arr.reduce(function(int, func){
		// 	return func(int)
		// }
}