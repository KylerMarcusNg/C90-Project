
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	//Add the code
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    //Add the code
}
// End of project 91 //







//Start of project 92//


//define 2 variables that will be used to keep track of who is asking the question and who is answering the question.

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			//Add the code
		}
		else 
		{
			//Add the code
		}
	}
	
	if(question_turn == "player1")
	{
		//Add the code
	}
	else 
	{
		//Add the code
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

