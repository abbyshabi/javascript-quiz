function compute() {
	var Q1 = document.getElementsByName('question1');
	var Q2 = document.getElementsByName('question2');
	var Q3 = document.getElementsByName('question3');
	var Q4 = document.getElementsByName('question4');
	var score = 0;
		for (var i = 0, length = Q1.length; i < length; i++) {
			if (Q1[i].checked) {
				//alert(Q1[i].value);
				if (Q1[i].value === 'd') {
					score +=25
			}
		}
	}
		for (var i = 0, length = Q2.length; i < length; i++) {
		if (Q2[i].checked) {
			//alert(Q1[i].value);
			if (Q2[i].value === 'a') {
				score +=25
			}
		}
	}
		for (var i = 0, length = Q3.length; i < length; i++) {
		if (Q3[i].checked) {
			//alert(Q1[i].value);
			if (Q3[i].value === 'c') {
				score +=25
			}
		}
	}
	 	for (var i = 0, length = Q4.length; i < length; i++) {
		if (Q4[i].checked) {
			//alert(Q1[i].value);
			if (Q4[i].value === 'b') {
				score +=25
			}
		}
	}
		if (score <= 25)  {
			document.getElementById('message').value = 'sorry try again , you scored : ' + score;
	}
		else if (score === 50){
			document.getElementById('message').value = 'you can do even better , you scored : ' + score;
	}
		else {
			document.getElementById('message').value = 'congratulations! , you scored :' + score;

	}

		function reset()  {

			document.getElementById("question1").value = '';
			document.getElementById("question2").value = '';
			document.getElementById("question3").value = '';
			document.getElementById("question4").value = '';

} 































}