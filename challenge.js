
let timer = document.getElementById("counter")
let pauseButton = document.getElementById("pause")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let i = 0
let time = setInterval(addCounter, 1000)
let paused = false

function addCounter(){
    timer.textContent = i
    i ++
}

function stopCounter(){
    clearInterval ( time );
}

pauseButton.addEventListener("click", () => {
    if (paused == false) {
      paused = true
      pauseButton.textContent = "Resume"
      clearInterval(time)
    } else {
      paused = false
      pauseButton.textContent = "Pause"
      time = setInterval(addCounter, 1000)
    }
      
})

minusButton.addEventListener("click", () => {
    if (paused == false){
    const time = parseInt(timer.textContent, 10)
    timer.textContent = `${time - 1}`
    }
})

plusButton.addEventListener("click", () => {
    if (paused == false){
    const time = parseInt(timer.textContent, 10)
    timer.textContent = `${time + 1}`
    }
})
