setInterval(setClock, 1000)
const hourHand=document.querySelector("[data-hour-hand]")
const minuteHand=document.querySelector("[data-minute-hand]")
const secondHand=document.querySelector("[data-second-hand]")
function setClock(){
    const currentDate=newDate()
    const secondsRatio=currentDate.getSeconds()/60
    const minuteRatio=(secondsRatio+currentDate.getminutes())/60
    const hourRatio=(minuteRatio+currentDate.getHour())/12
}
setRotation(second)