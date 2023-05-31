setInterval(setClock, 1000)
const hourHand=document.querySelector("[data-hour-hand]")
const minuteHand=document.querySelector("[data-minute-hand]")
const secondHand=document.querySelector("[data-second-hand]")
function setClock(){
    const currentDate=newDate()
    const secondsRatio=currentDate.getSeconds()/60
    const minuteeRatio=(secondsRatio+currentDate.getminutes())/60
    const hoursRatio=(minutesRatio+currentDate.getHour())/12

setRotation(secondHand,secondsRatio)
setRotation(minuteHand,minuteRatio)
setRotation(hourHand,hourRatio)

}
function setRotation(element,rotationRatio){
    element.style.setProperty("--rotation",rotationRatio*360)
}
setClock()