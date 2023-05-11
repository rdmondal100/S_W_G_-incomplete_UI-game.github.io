
// game
let game=true
let round=0
let status;
do{

let you=prompt("Enter your choice( 'g' for gun 's' for snake and 'w' for water)")
  let com=Math.floor(Math.random()*3)+1
  {    if(com==1){
     com= 's'
}
else if(com==2)
{
   com='g'
}
else if(com==3){
   com='w'}}

  
  

if(you==com){
  alert("Game drow!")
  status='Game drow!'
}

  else if(you=='g' && com=='w' ){
    alert("You lose!")
      status='You lose!'

  }
  else if(you=='w' && com=='g' ){
    alert("You won!")
    status='You won!'
  }
  else if(you=='g' && com=='s'){
    alert("You won!")
        status='You won!'

  }
  else if(you=='s' && com=='g'){
    alert("You lose!")
    status='You lose!'
  }
  else if(you=='s' && com=='w'){
    alert("You won!")
        status='You won!'}

  else if(you=='w' && com=='s'){
    alert("You lose!")
  status='You lose!'}

  game=confirm("Play again?")

  round++;
  document.write("<br>Round-" + round + ":<br>" +
               "Computer's choice was: " + com + "<br>" +
               "Your choice was: " + you + "<br>" +
               "So, " + status);

}while(game)


