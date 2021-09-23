
const removePlayingClass = function(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing")
}

const keys = document.querySelectorAll("#key")
keys.forEach(key => {
    key.addEventListener('transitionend', removePlayingClass)
});

document.addEventListener("keydown", (e)=>{
    const key = document.getElementById(`${e.keyCode}`)
    const referenceKey = document.querySelector(`[class = '${e.keyCode}']`) || document.querySelector(`[class = '${e.keyCode} playing']`)
    key.currentTime = 0
    referenceKey.classList.add("playing")
    key.play()
})

