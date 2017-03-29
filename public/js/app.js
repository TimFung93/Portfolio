


$(window).on('load', function() { 


function runTyping() {
		let element = document.querySelector('#output');
		let typeSpeed = 100; // 80 ms
		let deleteSpeed = 30; // 30 ms
		let deleteAfter = 1000; // 1 second
		let items = [
		  "I make cool apps",
		  "I learn quickly",
		  "I enjoy challenges",
		  "I have HUSTLE",
		  "Please Hire me! :D"
		];
		/* END SETTINGS */

		let sentence = 0;
		let currentChar = 0;
		let direction = 1;
		let deleteInterval = null;

		function type() {
		  if (sentence >= items.length) {
		    sentence = 0;
		  }

		  let chars = items[sentence].split('');

		  setTimeout(function() {
		    if (currentChar >= chars.length) {
		      setTimeout(function() {
		        sentence++;

		        deleteInterval = setInterval(function() {
		        	element.innerHTML = element.innerHTML.substr(0, currentChar - 1);
		          	
		          currentChar--;

		          if (currentChar === 0) {
		            clearInterval(deleteInterval);
		            type();
		          }
		        }, deleteSpeed);
		      }, deleteAfter);

		      return;
		    }

		    element.innerHTML += chars[currentChar];
		    currentChar++;

		    type();
		  }, typeSpeed);
		}

		type();
	}
runTyping();

	})

// $( document).ready(function() {
    


// // $('.button-collapse').sideNav();

// $('#output').click(function() {

// runTyping();
// console.log('i work')

// })

// });


















