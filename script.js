const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
function generateDice(box){
  const diceNumber = Math.floor(Math.random()*6 + 1);
  if(diceNumber==1){
    box.style.gridTemplateAreas = `
    ". . ."
    ". c1 ."
    ". . ."
    `;
  }
  else if(diceNumber==2){
    box.style.gridTemplateAreas = `
    ". . c1"
    ". . ."
    "c2 . ."
    `;
  }
  else if(diceNumber==3){
    box.style.gridTemplateAreas = `
    ". . c1"
    ". c2 ."
    "c3 . ."
    `;
  }
  else if(diceNumber==4){
    box.style.gridTemplateAreas = `
    "c1 . c2"
    ". . ."
    "c3 . c4"
    `;
  }
  else if(diceNumber==5){
    box.style.gridTemplateAreas = `
    "c1 . c2"
    ". c3 ."
    "c4 . c5"
    `;
  }
  else if(diceNumber==6){
    box.style.gridTemplateAreas = `
    "c1 . c2"
    "c3 . c4"
    "c5 . c6"
    `;
  }

  createCells(diceNumber,box);
}
function createCells(diceNumber,box){
    for(let i=1;i<=diceNumber;i++){
        let cell = document.createElement("div");
        cell.classList.add("circle");
        cell.classList.add(`c${i}`)
        box.appendChild(cell);
    }
}
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click",()=>{
  box1.innerHTML="";
  box2.innerHTML="";
  generateDice(box1);
  generateDice(box2);
  const box1ChildCount = box1.childElementCount;
  const box2ChildCount = box2.childElementCount;
  const player = document.getElementsByTagName("h1")[0];
  console.log(player);
  if(box1ChildCount<box2ChildCount){
    // player.innerText = "2";
    player.innerHTML = `<em>Player <span>2</span> Wins!</em>`;
  }
  else if(box1ChildCount>box2ChildCount){
    player.innerHTML = `<em>Player <span>1</span> Wins!</em>`;
  }
  else {
    const element = document.getElementsByTagName("h1")[0];
    console.log(element)
    element.innerHTML=`<em>Match Drawn</em>`;
  }
})

/*         Another Way
const box = document.querySelector(".box");
function generateDice(box) {
  const diceNumber = Math.floor(Math.random() * 6 + 1);
  console.log(diceNumber);
  
  // Clear previous dice
  box.innerHTML = '';
  
  // Create a 3x3 grid container for the dice
  box.style.display = 'grid';
  box.style.gridTemplateColumns = 'repeat(3, 1fr)';
  box.style.gridTemplateRows = 'repeat(3, 1fr)';
  
  // Define positions for each possible dot
  const positions = {
    1: [[1, 1]],  // center
    2: [[0, 0], [2, 2]],  // top-left and bottom-right
    3: [[0, 0], [1, 1], [2, 2]],  // top-left, center, bottom-right
    4: [[0, 0], [0, 2], [2, 0], [2, 2]],  // all corners
    5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],  // all corners + center
    6: [[0, 0], [0, 1], [0, 2], [2, 0], [2, 1], [2, 2]]  // left and right columns
  };
  
  // Create dots at the specified positions
  positions[diceNumber].forEach(pos => {
    const cell = document.createElement("div");
    cell.classList.add("circle");
    cell.style.gridColumn = pos[1] + 1;
    cell.style.gridRow = pos[0] + 1;
    box.appendChild(cell);
  });
}

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", () => {
  generateDice(box);
});
*/
