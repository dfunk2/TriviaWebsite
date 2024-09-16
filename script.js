// Purpose: This file contains the JavaScript code for the quiz.
document.addEventListener('DOMContentLoaded', function(){
// when correct answer is clicked, it will turn green
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function(){
        correct.style.backgroundColor = 'green';
        document.querySelector('#feedback1').innerHTML = 'Correct!';
    });
// when all incorrect answers are clicked, they will turn red
    let incorrect = document.querySelectorAll('.incorrect');
    for(let i = 0; i < incorrect.length; i++) {
        incorrect[i].addEventListener('click', function(){
            incorrect[i].style.backgroundColor = 'red';
            document.querySelector('#feedback1').innerHTML = 'Incorrect!';
        });
    }
     // free response question, when correct answer is typed, it will turn green and display "Correct!"
   document.querySelector('#check').addEventListener('click', function() {
       let input = document.querySelector('input');
       if (input.value === 'Argentina') {
           input.style.backgroundColor = 'green';
           document.querySelector('#feedback2').innerHTML = 'Correct!';
       } else {
           input.style.backgroundColor = 'red';
           document.querySelector('#feedback2').innerHTML = 'Incorrect!';
       }
    });
});




