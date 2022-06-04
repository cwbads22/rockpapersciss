// Game Options
let choices = ['rock', 'paper', 'scissors'];

// User Select Options
const mySelect = window.prompt('Rock, Paper or Scissors?');
    alert('You choose ' + mySelect)

//Player choice to case insentive
const mySelectlw = mySelect.toLocaleLowerCase();

// Computer Select Options
const compSelect = choices;
    let cptSelect = compSelect[Math.floor(Math.random() * compSelect.length)];
    
// Lógica DRAW, WIN & LOOSE
if (mySelectlw === cptSelect) {
    alert('Computer choose ' + cptSelect);
    alert('DRAW!');
} else if (mySelectlw == 'scissors' && cptSelect == 'paper' || mySelectlw == 'paper' && cptSelect == "rock" || mySelectlw == 'rock' && cptSelect == 'scissors'){
    alert('Computer choose ' + cptSelect);
    alert('You WIN!!');
} else {
    alert('Computer choose ' + cptSelect);
    alert('You LOOSE!');
}
