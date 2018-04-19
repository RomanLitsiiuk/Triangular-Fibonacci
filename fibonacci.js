function fibonacciCalculation() {
	var fib;
	var n;
	var i;
	var num_1 = 1, num_2 = 1;
	var repeat;

	n = +prompt('Введите порядковй номер числа Фибоначчи:','');

	if (Boolean(n) === Boolean(NaN)) {
		repeat = confirm('Номер введен некорректно. Желаете повторить?');
		if (repeat === true) {
			return fibonacciCalculation();
		}
	}

	if (n < 0 || n > 1000) {
		repeat = confirm('Порядковый номер задан слишком большим или отрицательным. Желаете повторить?');
		if (repeat === true) {
			return fibonacciCalculation();
		}
	}

	console.log('1) ' + num_1 + ';')
	console.log('2) ' + num_2 + ';')

	for (i = 3; i <= n; i++) {
		fib = (num_1 + num_2);
		console.log('' + i + ') ' + num_1 + ' + ' + num_2 + ' = ' + fib + ';');
		num_1 = num_2;
		num_2 = fib;
	}

}

fibonacciCalculation()