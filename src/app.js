(function () {
	const btn = document.querySelector('#btn');
	const container = document.querySelector('#container');
	const color1 = document.querySelector('#color1');
	const color2 = document.querySelector('#color2');
	const color3 = document.querySelector('#color3');
	const color4 = document.querySelector('#color4');
	let count = [];
	let countClicks = 0;

	function getElement(numColor) {
		switch (numColor) {
			case 1 :
				return color1
				break;
			case 2 :
				return color2
				break;
			case 3 :
				return color3
				break;
			case 4 :
				return color4
				break;
			case 'color1':
				return color1
				break;
			case 'color2':
				return color2
				break;
			case 'color3':
				return color3
				break;
			case 'color4':
				return color4
				break;
			default:
				console.log('not');
		}
	}

	function numRandon() {
		return Math.floor(Math.random() * (5 - 1)) + 1;
	}
	function activeColor(numColor) {
		numColor.classList.add('active');
		setTimeout(() => {
			numColor.classList.remove('active');
		}, 500)
	}
	function eachCount() {
		let time = 0;
		console.log(count);
		count.forEach(item => {
			time += 1000;
			setTimeout(() => {
				let classColor = getElement(item);
				activeColor(classColor);
			}, time)
		})
	}
	function startLevel() {
		let randon = count.push(numRandon());
		eachCount();
	}

	function isCorrectColor(colorString) {
		return colorString.includes(`${count[countClicks]}`)
	}

	function isLastLevelValidation() {
		return countClicks == count.length-1
	}

	function validateLevel(colorString) {
		if ( isCorrectColor(colorString) && isLastLevelValidation() ) {
			countClicks = 0;
			startLevel();
			console.log(`en juego ${count.length}`);
		} else if (isCorrectColor(colorString)){
			countClicks += 1;
			console.log(`en juego ${count.length}`);
		} else {
			count = [];
			countClicks = 0;
			console.log(count)
			console.log('game over')
		}
	}

	btn.addEventListener('click', () => {
		if (count.length == 0) {
			btn.classList.remove('hidden');
			startLevel();
			console.log(count);
		}
	})

	container.addEventListener('click',(e) => {
		if (count.length === 0) {
			console.log('vacio')
		} else {
			let colorClick = e.target.classList[0];
			let elementColor = getElement(colorClick);
			activeColor(elementColor);
			validateLevel(colorClick)
		}
	})
})();