// Reading user input until it is number
function getNumber(way) {
	let msg = way + "Enter num of Fibonacci";
	let num = parseFloat(prompt(msg));
	while (isNaN(num) || (num <= 0)) {
		alert("Please enter a number >0 !");
		num = parseFloat(prompt(msg));
	}
	return num;
}

// 1 way 
function fibonacciCycle(n) {
	let previous_first = 0;
    let previous_second = 1;
	let next = 1;

	for (let i = 2; i <= n; i++) {
		next = previous_first + previous_second;
		previous_first = previous_second;
		previous_second = next;
	}
	return next;
}

// 2 way 
function fibonacciMatrix(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}

// 3 way 
function fibonacciRecursive(n) {
	if (n <= 2) return 1;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Way 1: Result
let num1 = getNumber("Way 1 (Cycle). ");
alert("Way 1. Result: " + num1 + "-th num of Fibonacci is " + fibonacciCycle(num1));

// Way 2: Result
let num2 = getNumber("Way 2 (Matrix). ");
alert("Way 2. Result: " + num2 + "-th num of Fibonacci is " + fibonacciMatrix(num2));

// Way 3: Result
let num3 = getNumber("Way 3 (Recursion). ");
alert("Way 3. Result: " + num3 + "-th num of Fibonacci is " + fibonacciRecursive(num3));