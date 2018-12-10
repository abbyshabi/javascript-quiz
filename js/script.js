function computeQuiz() {
	var qOne = document.getElementsByName('question1');
	var qTwo = document.getElementsByName('question2');
	var qThree = document.getElementsByName('question3');
	var qFour = document.getElementsByName('question4');
	var score = 0;

	for (var i = 0, length = qOne.length; i < length; i++) {
		if (qOne[i].checked) {
			var ans1 = qOne[i].value
			if (qOne[i].value === 'd') {
				score +=25
			}
		}
	}
	for (var i = 0, length = qTwo.length; i < length; i++) {
		if (qTwo[i].checked) {
			var ans2 = qTwo[i].value
			if (qTwo[i].value === 'c') {
				score +=25
			}
		}
	}
	for (var i = 0, length = qThree.length; i < length; i++) {
		if (qThree[i].checked) {
			var ans3 = qThree[i].value;
			if (qThree[i].value === 'c') {
				score +=25
			}
		}
	}
	for (var i = 0, length = qFour.length; i < length; i++) {
		if (qFour[i].checked) {
			var ans4 = qFour[i].value
			if (qFour[i].value === 'b') {
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


	//$(document).ready(function(){
	//	$("#bttn").click(function(){
	//		$("#ask").hide();
	//	});
	//});

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
