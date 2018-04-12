

let count = document.querySelector(".moves");			// count card move
let card = document.getElementsByClassName("card");
let cards = document.querySelectorAll('.card');
let deck = document.querySelector(".deck");

let openCard = [];									// openCard array
let newOpenCard =[];
var win = 0;										// game complete			
let playAgain = document.querySelector(".restart");
let move = 0;										// card move
count.innerHTML = move;

for (var i = 0; i < cards.length; i++){
    card = cards[i];
  
    card.addEventListener("click",cardOpen);			// add event click flip card 
    playAgain.addEventListener("click",resetGame);		// add event click reset button

};

function cardOpen(){
	// ask how many 
	// if you match already dont open it 
	// if not two card
	if(!event.target.classList.contains("match")){		// only one click after card matched

	event.target.classList.add('show', 'open', )		// event click on each "li"

	openCard.push(event.target);						
	newOpenCard.push(event.target);
	}		
	setTimeout(function(){
		if(openCard.length === 2){						// compare 2 card in array
			move++;
    		count.innerHTML =move;
			if(openCard[0].innerHTML === openCard[1].innerHTML){	// card match 
				openCard[0].classList.add("match",);
    			openCard[1].classList.add("match",);
    			openCard[0].classList.remove("show", "open", );
    			openCard[1].classList.remove("show", "open", );
   		 		openCard = [];
   		 		win++;
			} else{													// card don't match , close card ( turn black)
				openCard[0].classList.remove("show","open",);
    			openCard[1].classList.remove("show","open",);
    			openCard = [];
			}

		} else if (openCard.length >2 ){							// count card move 
			for(var i=0; i< openCard.length; i++){
				if(i%2==1){											// for each pair clicked = 1 move
					move++;
    				count.innerHTML = move;
				}
				openCard[i].classList.remove("show","open",);		
			}
			openCard=[];	
		}
		if(win == 8){												// win alert
			alert("You are victory");
		}
	},1000)
}

function resetGame(){												// resetGame function 
	move = 0;
	count.innerHTML = move;
	location.reload();
	for(var i =0; i<newOpenCard.length; i++){
		newOpenCard[i].classList.remove("match","show","open",);	// display card after press reset button
	}
		newOpenCard=[];
};




