

function gen1() {
    let line1 = "a) 2 + 2 = 2 + 2.5 - 0.5 ";
    let line2 = "b) 2 + 2.5 - 0.5 = 4.5 + (-1/8)<sup>&frac13;</sup>";
    let line3 = "c) 4.5 + (-1/8)<sup>1/3</sup> = 4.5 + (-1/8)<sup>2/6</sup>";
    let line4 = "d) 4.5 + (-1/8)<sup>2/6</sup> = 4.5 + ((-1/2)<sup>3</sup>)<sup>2/6</sup>";
    let line5 = "e) 4.5 + ((-1/2)<sup>3</sup>)<sup>2/6</sup> = 4.5 + ((-1/2)<sup>2</sup>)<sup>3/6</sup>";
    let line6 = "f) 4.5 + ((-1/2)<sup>2</sup>)<sup>3/6</sup> = 4.5 + (1/4)<sup>1/2</sup>";
    let line7 = "g) 4.5 + (1/4)<sup>1/2</sup> = 4.5 + 1/2 ";
  
    let FProof = line1 + "<br>" +
        line2 + "<br>" +
        line3 + "<br>" +
        line4 + "<br>" +
        line5 + "<br>" +
        line6 + "<br>" +
        line7;
    // for (i = 0; i < list1.length; i++) {
    //     par.innerHTML = list1[i] + "<br>";
    // }
  
    let par = document.querySelector("body")
    // let result = Math.floor(Math.random() * list1.length);
  
    par.style.color = "black";
    par.innerHTML = FProof;
    // par.innerHTML = list1[result];
  }
  // gen1()
// -------------------------------------


  
// fullscreen mode
// help from https://www.w3schools.com/howto/howto_js_fullscreen.asp
const bodyFullScreen = document.querySelector("body")
function openFullscreen() {
  if (bodyFullScreen.requestFullscreen) {
    bodyFullScreen.requestFullscreen();
  } 
  
//   else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
}
// openFullscreen()
// -------------------------------------


