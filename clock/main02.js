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

const dateTarget = new Date("2022-02-17T16:00:00");

setInterval(function () {
  const dateNow = new Date();
  const difference = dateTarget - dateNow;

  const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0');
  const hours = Math.floor((difference / 1000 / 60 / 60) % 24).toString().padStart(2, '0');

  document.querySelector("#timer").innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);

/*
const dateTarget = new Date("2022-02-16-16T10:30:00");
var now = new Date().getTime();
var timeDifference = dateTarget - now;
var days = Math.floor(timeDifference % / (1000 * 60 * 60 * 24))
var hours = / 1000 * 60 * 60
var minutes = / 1000 * 60
var seconds = / 1000

setInterval(function(getTime()) {
  document.getElementById("countdown").innerHTML = hours.toString().padStart(2, '0') + minutes.toString().padStart(2, '0') + seconds.toString().padStart(2, '0');
}, 1000);

*/