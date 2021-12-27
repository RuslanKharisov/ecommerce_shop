let testcart = {
	'articul1': {
		"name": "blabla",
		"count": 0,
		"price": 109,
	},
	'articul2': {
		"name": "blabla",
		"count": 0,
		"price": 109,
	},
}

document.onclick = event => {
	// console.log(event.target.classList);
	if(event.target.classList.contains('plus')) {
		plusFunction(event.target.dataset.product);
	}
	if(event.target.classList.contains('minus')) {
		minusFunction(event.target.dataset.product);
	}
}

// увеличение количества товара
const plusFunction = product => {
	if (testcart[product] == undefined){
		testcart[product] == {}
		testcart[product]['count'] == 1
	}else{
		testcart[product]['count']++;
	}
	renderCart();
}

// уменьшение количества товара
const minusFunction = product => {
	if (testcart[product]['count']-1 == 0) {
		deliteFunction(product);
		return true;
	}
	testcart[product]['count']--;
	renderCart();
}

// удаление товара
const deliteFunction = product => {
	delete testcart[product];
	renderCart();
}

const renderCart = () =>{
	console.log(testcart);
}

renderCart();