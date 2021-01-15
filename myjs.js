//all code generated based on what knowledge i have and what i learnt in class.
var score = 0;
var qcount = 0;
var correct = 0;
var tick = false;
var wrong=-1;
var i =0;
var b =-1;
var default_text = "SELECT NEXT TO BEGIN"
let overlay_text= document.getElementById('overlay');
var btn = document.getElementById('next');
var matched_found = document.getElementById('score');
var qmatch = document.getElementById('qcount');

//creating player object
var player = {
	person: ""
}//end

function user(){
	document.getElementById('getName').classList.add('visible');
		document.getElementById('submitPrompt').addEventListener('click', function(){
    			document.getElementById('getName').style.display='none';
    	player.person = document.getElementById('usr').value;
});
}//end get name function


//creating question objects
var Food_questions = {

	question1: "What is the most common street food in Trinidad and Tobago?",
	question2: "It is the most Popular food at the Beach!?",
	question3: "_____ is a must on Divali.",
	question4: "What dish has a mixture of peas, rice, and any meat of choice etc?",
	question5: "The slogan\"Flavour to d bone\" belongs to who?"
};
var arr_food= Object.values(Food_questions);
arr_food.toString();

var Celebrity_questions = {

	question1: "This artiste is known for the song Savannah grass",
	question2: "He sings soca, and he is known as the fire man",
	question3: "He played professional football for Manchester UTD",
	question4: "He played cricket for the West Indies and has a line of glasses",
	question5: "He calls himself the water lord"
};
var arr_celeb= Object.values(Celebrity_questions);
arr_celeb.toString();

var Geography_questions = {

	question1: "what is the highest mountain peak in Trinidad and Tobago?",
	question2: "Where is the national airport located in Trinidad?",
	question3: "What is the name of the centrally located swamp?",
	question4: "Buccu reef is located in?",
	question5: "Trinidad and Tobago is a ________ island"
};
var arr_geo= Object.values(Geography_questions);
arr_geo.toString();

var Celebration_questions = {

	question1: "what type of music is played at christmas?",
	question2: "what is the popular red drink made in the christmas period?",
	question3: "what month is carnival usually held?",
	question4: "how many days is carnival celebrated?",
	question5: "what type of music is played at carnival?"
};
var arr_fest= Object.values(Celebration_questions);
arr_fest.toString();

var Politics_questions = {

	question1: "Who is the current prime minister?",
	question2: "what year did Trinidad and Tobago aquire independance?",
	question3: "what year was the last election?",
	question4: "when was the cannabis control bill passed? hint: dd/mm/yy",
	question5: "where is parliament held?"
};
var arr_politics= Object.values(Politics_questions);
arr_politics.toString();

//answers to all questions
var answers1 = {
	ans1: "doubles",
	ans2: "bake and shark",
	ans3: "curry",
	ans4: "pealau",
	ans5: "royal castle"
};
var arr_food_ans= Object.values(answers1);
arr_food_ans.toString();

var answers2 = {
	ans1: "kes",
	ans2: "bunji garlin",
	ans3: "dwight yorke",
	ans4: "brian lara",
	ans5: "iwer george"
};
var arr_celeb_ans= Object.values(answers2);
arr_celeb_ans.toString();

var answers3 = {
	ans1: "el cerro del aripo",
	ans2: "piarco",
	ans3: "caroni swamp",
	ans4: "tobago",
	ans5: "twin"
};
var arr_geo_ans= Object.values(answers3);
arr_geo_ans.toString();

var answers4 = {
	ans1: "parang",
	ans2: "sorrel",
	ans3: "february",
	ans4: "2",
	ans5: "soca"
};
var arr_fest_ans= Object.values(answers4);
arr_fest_ans.toString();

var answers5 = {
	ans1: "dr. kieth rowley",
	ans2: "1962",
	ans3: "2020",
	ans4: "14/10/20",
	ans5: "red house"
};
var arr_politics_ans= Object.values(answers5);
arr_politics_ans.toString();



function html_txt(){
	document.getElementById('overlay').classList.add('visible');
}

function game_end(){
			overlay_text.innerHTML="Congratulations! "+player.person+"<br/>"+"Your Score: "+score+"<br/>"+"Game Ended"
			+"<br/>"+"Click Anywhere To Return";
			html_txt();
}

//reset board
function resetboard(){         
                            setTimeout(function () {
                                    location.reload()
                                                }, 100);
                        };//end reset

function points(){
    score+=100;
    matched_found.innerText= score;
}//end points

function question_count(){
	if (qcount <=4){
    qcount++;
    qmatch.innerText= qcount;
}//end if

}//end question count

//reset score give report
function stop_game(){
				html_txt();
					overlay_text.innerHTML="Game Over "+player.person+"<br/>"+"Your Score: "+score+"<br/>";
};//end stop game


function failout(){
		if (wrong >= 3){
			stop_game();
		}//end if
}//end failout

function warning(){
	if (wrong == 2){
		document.getElementById('overlay4').classList.add('visible');
	}
}//end warning

function isWrong(){
			if( tick == false) {//tick is false if the answer doesnt match the question
				wrong++;//increments wrong to work with failout
					correct-b;//this resets the streak
		};
}//end is wrong

function win(){
	if (correct == 5){
			alert("Congratulations You Won!");
				game_end();
	}//end if
}//end win
function streak(){
	if (correct >= 2){
	document.getElementById('overlay2').classList.add('visible');
	document.getElementById('overlay2').innerHTML = "Keep going, correct= "+ correct;
	}//end if
}//end streak


function off() {
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay4").style.display = "none";
}

function check_end(){
	if (b == 5){
		game_end();
	}
}//end check end
function disable_button(){
	document.getElementById("category1").disabled = true;
	document.getElementById("category2").disabled = true;
	document.getElementById("category3").disabled = true;
	document.getElementById("category4").disabled = true;
	document.getElementById("category5").disabled = true;
}//end disable

//check answer
function checkAns1(){
	let new_ques = document.getElementById('questions');
	var test = document.getElementById('ans').value;
	if(new_ques.innerHTML == arr_food[b] && test == arr_food_ans[b]){
		points();
				correct++;
					streak();
					win();
						tick = true;
						wrong=0;			
}else{tick=false;}
	b++
		check_end();
			isWrong();
				warning();
			document.getElementById('ans').value = "";
}//end function

function checkAns2(){
	let new_ques = document.getElementById('questions');
	var test = document.getElementById('ans').value;
	if(new_ques.innerHTML == arr_celeb[b] && test == arr_celeb_ans[b]){
		points();
			correct++;
			streak();
				win();
					tick = true;
					wrong=0;			
}else{tick=false;}
	b++
		check_end();
			isWrong();
			document.getElementById('ans').value = "";
}//end function

function checkAns3(){
	let new_ques = document.getElementById('questions');
	var test = document.getElementById('ans').value;
	if(new_ques.innerHTML == arr_geo[b] && test == arr_geo_ans[b]){
		points();
			correct++;
			streak();
				win();
					tick = true;
					wrong=0;			
}else{tick=false;}
	b++
		check_end();
			isWrong();
			document.getElementById('ans').value = "";
}//end function

function checkAns4(){
	let new_ques = document.getElementById('questions');
	var test = document.getElementById('ans').value;
	if(new_ques.innerHTML == arr_fest[b] && test == arr_fest_ans[b]){
		points();
			correct++;
				win();
				streak();
					tick = true;
					wrong=0;			
}else{tick=false;}
	b++
		check_end();
			isWrong();
			document.getElementById('ans').value = "";
}//end function

function checkAns5(){
	let new_ques = document.getElementById('questions');
	var test = document.getElementById('ans').value;
	if(new_ques.innerHTML == arr_politics[b] && test == arr_politics_ans[b]){
		points();
			correct++;
			streak();
				win();
					tick = true;
					wrong=0;			
}else{tick=false;}
	b++
		check_end();
			isWrong();
			document.getElementById('ans').value = "";
}//end function

//functions for categories to add event listeners for submit/start button; buttons only work when a category is selected
function food(){
	user();
	score = 0;
	let new_ques = document.getElementById('questions');
	new_ques.innerHTML = default_text;
			document.getElementById('next').addEventListener("click",function(){
				next_food(checkAns1());
					question_count();
						failout();	
							});//end event listener
		disable_button();
};//end food


function celeb(){
	user();
	score = 0;
	let new_ques = document.getElementById('questions');
	new_ques.innerHTML = default_text;
			document.getElementById('next').addEventListener("click",function(){
				next_celeb(checkAns2());
					question_count();
						failout();	
							});//end event listener
			disable_button();
		};//end celeb
function geo(){
	user();
	score = 0;
	let new_ques = document.getElementById('questions');
	new_ques.innerHTML = default_text;
			document.getElementById('next').addEventListener("click",function(){
				next_geo(checkAns3());
					question_count();
						failout();	
							});//end event listener
			disable_button();
		};//end geo

function festive(){
	user();
	score = 0;
	let new_ques = document.getElementById('questions');
	new_ques.innerHTML = default_text;
		document.getElementById('next').addEventListener("click",function(){
				next_fete(checkAns4());
					question_count();
						failout();	
							});//end event listener
			disable_button();
		};//end geo
function politics(){
	user();
	score = 0;
	let new_ques = document.getElementById('questions');
	new_ques.innerHTML = default_text;
			document.getElementById('next').addEventListener("click",function(){
				next_election(checkAns5());
					question_count();
						failout();	
							});//end event listener
			disable_button();
		};//end geo

//all next functions will get the next question in the object and replace the last question on the game board
function next_food(){
	let new_ques = document.getElementById('questions');
			if (i <= arr_food.length-1){
					new_ques.innerHTML= arr_food[i];
						i++;
				}//end if				
};//end 

function next_celeb(){
	let new_ques = document.getElementById('questions');
			if (i <= arr_celeb.length-1){
					new_ques.innerHTML= arr_celeb[i];
						i++;
				}//end if				
};//end 

function next_geo(){
	let new_ques = document.getElementById('questions');
			if (i <= arr_geo.length-1){
					new_ques.innerHTML= arr_geo[i];
						i++;
				}//end if				
};//end 

function next_fete(){
	let new_ques = document.getElementById('questions');
			if (i <= arr_fest.length-1){
					new_ques.innerHTML= arr_fest[i];
						i++;
				}//end if				
};//end 

function next_election(){
	let new_ques = document.getElementById('questions');
			if (i <= arr_politics.length-1){
					new_ques.innerHTML= arr_politics[i];
						i++;
				}//end if				
};//end 