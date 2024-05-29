let colorChanger = function(){
    let max=255
    let min=0
    let red = Math.floor(Math.random() * (max - min + 1) + min);
  let green = Math.floor(Math.random() * (max - min + 1) + min);
  let blue = Math.floor(Math.random() * (max - min + 1) + min);
    document.body.style.backgroundColor = `rgb(${red} ${green} ${blue}) `
}

let sI;
document.querySelector('#start').addEventListener('click',function(){
    if (!sI){
        sI = setInterval(colorChanger,1000)
        console.log('Set Interval Running')
    }
   
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(sI)
    sI= null;
    console.log("Set Interval Stopped")
}) 