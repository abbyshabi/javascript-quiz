function compute() {
	var Q1 = document.getElementsByName('question1');
	var Q2 = document.getElementsByName('question2');
	var Q3 = document.getElementsByName('question3');
	var Q4 = document.getElementsByName('question4');
	var score = 0;
	for (var i = 0, length = Q1.length; i < length; i++) {
		if (Q1[i].checked) {
			var ans1 = Q1[i].value
			if (Q1[i].value === 'd') {
				score +=25
			}
		}
	}
	for (var i = 0, length = Q2.length; i < length; i++) {
		if (Q2[i].checked) {
			var ans2 = Q2[i].value
			if (Q2[i].value === 'c') {
				score +=25
			}
		}
	}
	for (var i = 0, length = Q3.length; i < length; i++) {
		if (Q3[i].checked) {
			var ans3 = Q3[i].value;
			if (Q3[i].value === 'c') {
				score +=25
			}
		}
	}
	for (var i = 0, length = Q4.length; i < length; i++) {
		if (Q4[i].checked) {
			var ans4 = Q4[i].value
			if (Q4[i].value === 'b') {
				score +=25
			}
		}
	}
	if (ans1 == undefined || ans2 == undefined || ans3 == undefined || ans4 == undefined) {
alert('Please select all answers');
	} else {

	 if (score === 0){
		document.getElementById('message').value = 'Try again, you scored : ' + score;
	}
	 else if (score <= 25)  {
		document.getElementById('message').value = 'You can do better , you scored : ' + score;
	}
	else if (score === 50){
		document.getElementById('message').value = 'There is room for improvement, you scored : ' + score;
	}
	else if (score > 50){
		document.getElementById('message').value = 'congratulations! , you scored :' + score;

	}
	else {
		document.getElementById('message').value = 'Please select an answer'
	}

		event.preventDefault();
	//var fail = "Try again ";
	//var message = "congratulations!"; 

	$(document).ready(function(){
		$("#bttn").click(function(){
			$("#ask").hide();
		});
	});
}
} 
function reset()  {

	document.getElementById("question1").value = '';
	document.getElementById("question2").value = '';
	document.getElementById("question3").value = '';
	document.getElementById("question4").value = '';

	$(document).ready(function(){
		$("#bttn1").click(function(){
		   $("#ask").show();
		}); 
	});
} 


$(document).ready(function(){
  $("#bttn").click(function(){
       $("#ask").hide();
    });
    $("#bttn1").click(function(){
       $("#ask").show();
    }); 
});
