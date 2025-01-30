/*
used primarily for checking the answer
*/

const checkAnswer = (ansId, responseId, blockId, correctAnswer) => {
    let ans = document.getElementById(ansId);
    let response = document.getElementById(responseId);
    let linkBlock = document.getElementById(blockId);

    if (ans.value == correctAnswer) {
      linkBlock.style.cssText = "visibility:visible;";
      response.innerHTML = "";
      ans = "remove"; 
    }
    else {
      linkBlock.style.cssText = "visibility:none;";
      response.style.cssText = "color:red;";
      response.innerHTML = "incorrect";
    }
}


const layerMap = {
  1: ["ans1", "for-response1", "block1", 377], 
  2: ["ans2", "for-response2", "block2", 576], 
  3: ["ans3", "for-response3", "block3", 6], 
  4: ["ans4", "for-response4", "block4", 20], 
  5: ["ans5", "for-response5", "block5", 0.15],  // h = 0.15m; w ~ 3.65m; l ~ 10.95m
  6: ["ans6", "for-response6", "block6", "e"],
  7: ["ans7", "for-response7", "block7", 3020],
  8: ["ans8", "for-response8", "block8", 625],
  9: ["ans9", "for-response9", "block9", "electrolysis"],

  10: ["ans10", "for-response10", "block10", "autosome"],
  // 11: ["ans4", "for-response4", "block4", 20],
}

let rotate = 0
let changedBgColor = false 
let roundedBorder = false 
document.addEventListener(
  "keydown", 
  (event) => {
    if (event.key == "Enter") {
      console.log(layerMap[layer])
      checkAnswer(
        layerMap[layer][0], 
        layerMap[layer][1],
        layerMap[layer][2],
        layerMap[layer][3]
      )
    }

    else if (event.key == "Control"){
      if (rotate == 0){
        // document.querySelector("#chessboard").style.cssText = "transform: rotateY(0deg);";
        document.querySelector("#chessboard").style.cssText = "transform: rotateZ(135deg) scale(1.25);";
        rotate = 1
      }
      else{
        document.querySelector("#chessboard").style.cssText = "transform: rotateZ(0deg) scale(1);";
        rotate = 0
      }
    }

    else if (event.key == "Shift"){
      const main = document.querySelector("main")
      if (!changedBgColor){
        main.style.cssText = "background-color:red;"
        changedBgColor = true 
      }
      else{
        main.style.cssText = "background-color:black;"
        changedBgColor = false 
      }
    }

    else if (event.key == " "){
      if (!roundedBorder){
        document.querySelector("#chessboard").style.cssText = "border-radius:50%;";
        roundedBorder = true 
      }
      else{ 
        document.querySelector("#chessboard").style.cssText = "border-radius:0%;";
        roundedBorder = false  
      }
    }
  },
  false
)
