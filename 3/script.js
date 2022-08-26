
function convert() {
let number = document.getElementById('number').value;
let type = document.getElementById('type').value;
let result = document.getElementById('result');
let answer = document.getElementById('result_type').innerHTML;
    console.log(number);
    console.log(type);
    console.log(result);

	if(type=='Celcius'){
		let ans = (number * 9/5) + 32;
		answer = ' °F'
		ans = ans.toFixed(4);
		result.value = ans + answer;
	}
	else{
		let ans = (number - 32) * 5/9;
		answer = ' °C'
		ans = ans.toFixed(4);
		result.value = ans + answer;
	}
}