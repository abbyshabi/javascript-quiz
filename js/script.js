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


































}