function viewTriangular() {
	var height;
	var h = 0;
	var w = 0;
	var line;
	var line2;

	height = +prompt('Какой высоты треугольник вы хотите увидеть? Введите целое число от 1 до 100)', '');
	if (height < 0 || height > 100 || String(height) === 'NaN') {
		alert('Введите число от 1 до 100');
		return viewTriangular();
	}

	while (h < height) {
		line = '';
		line2 = '';

		for (w = 0; w < height - h; w++) {
			line += ' ';
		}

		for (w = 0; w < 2 * h + 1; w++) {
			line2 += '*';
		}

		console.log(line + line2);

		h++;
	}
}

viewTriangular();
