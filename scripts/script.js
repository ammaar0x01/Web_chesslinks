
// soundfx
const sound = document.createElement("audio")
sound.src = "./sounds/finger-snap.mp3"
document.querySelector("body").appendChild(sound)

function playSound(){
  sound.play()
}
// -------------------------------------
