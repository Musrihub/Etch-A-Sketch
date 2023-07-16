  
  let color = "black";
  let click = false;

document.addEventListener("DOMContentLoaded", function(){
   createBoard(16);

   document.querySelector("body").addEventListener("click", function(e){
if (e.target.targetName !="BUTTON"){
    click =!click;
    let draw =document.querySelector("#draw");
    if (click){
        draw.innerHTML = "you can draw";
    }
    else {
        draw.innerHTML = "you are allowed to draw";
    }
}
   })
   

    let btnPopup = document.querySelector("#popup")
    btnPopup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})
function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
  let div = document.createElement("div");
  div.style.backgroundColor = "white";
  div.addEventListener("mouseover", colorDiv)
    

  board.insertAdjacentElement("beforeend", div);


  }

}
   function getSize(){
     let input = prompt("enter the number you have selected");
    
            let message = document.querySelector("#message"); 
        if (input == ""){
            message.innerHTML = "please provide number";
        }
            else if (input < 0 || input > 64){
                message.innerHTML = "provide a number between 1 and 64";
            }
            else {
                message.innerHTML = "you can play!";
                
            }
            return input;
        }
  
 function colorDiv(){
if (click){
     if (color == "random"){
        this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
 }
}
function setColor(colorChoice){     
    color = colorChoice;
 }

 function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
 }