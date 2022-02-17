/*
// Clock (Stéphane)
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
*/

// Clock (Tuğçe)
/*
setInterval(function getTime() {
    const dateNow = new Date();
    document.querySelector("#clock").innerText = `${dateNow.getHours().toString().padStart(2, '0')}:${dateNow.getMinutes().toString().padStart(2, '0')}:${dateNow.getSeconds().toString().padStart(2, '0')}`}, 1000)
console.log(getTime());
*/

setInterval(function () {
    const dateNow = new Date();

    document.querySelector("#clock").innerText = 
    dateNow.getHours().toString().padStart(2, '0') + 
    ":" +
    dateNow.getMinutes().toString().padStart(2, '0') + 
    ":" +
    dateNow.getSeconds().toString().padStart(2, '0');
}, 1000);

console.log();



/*
// Countdown
// Set the date we're counting down to
var countDownDate = new Date("Feb 16, 2022 17:15:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Wir machen Feierabend. Bis morgen!";
  }
}, 1000);
*/

/*
// Own countdown
// Set the date we're counting down to
var countDownDate = new Date("Feb 16, 2022 17:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("owncountdown").innerHTML = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("owncountdown").innerHTML = "Fertig!";
  }
}, 1000);
*/

/*
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime,500);
}   
     function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}
*/

/*
const date = new Date();
const hour = new Date().getHours();
let ampm;
document.getElementById("clock").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
*/


/*
if (hour < 13) {
    document.getElementById("clock").innerHTML = "AM";

} else {
    document.getElementById("clock").innerHTML = "PM";
  }
*/

/*
if (jour < 13) {
    ampm = "AM"}
    else{
        ampm ="PM"
    }
*/ 