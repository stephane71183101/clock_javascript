/*
// Own countdown
// Set the date we're counting down to
var countDownDate = new Date("Feb 17, 2022 17:15:00").getTime();
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
    document.getElementById("countdown").innerHTML = "Fertig!";
  }
}, 1000);
*/

// Countdown
// create new constant variable for the countdown
const dateTarget2 = new Date("2022-02-17T16:00:00");

setInterval(function () {
  const dateNow = new Date();
  const difference = dateTarget2 - dateNow;

// calculate seconds from difference
// divide by 1000 because Date() returns milliseconds
  const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0');
  const hours = Math.floor((difference / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
  const days = Math.floor((difference / 1000 / 60 / 60 / 24));

// update the timer element with the difference
  document.querySelector("#countdown").innerText = `${days} T. ${hours}:${minutes}:${seconds}`;
}, 1000);

// add event listener to the button
// when the button is clicked, update the dateTarget2 variable
document.querySelector(".date-button").addEventListener("click", function () {
    dateTarget2 = new Date(document.querySelector(".date-input").value);
});

