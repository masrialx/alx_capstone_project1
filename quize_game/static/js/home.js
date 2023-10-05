document.addEventListener("DOMContentLoaded", function () {
const showPopupButton = document.getElementById("show-popup");
const quizPopup = document.getElementById("quiz-popup");
const playButton = document.querySelector(".btn1");
const cancelButton = document.querySelector(".btn2");

showPopupButton.addEventListener("click", function () {
 quizPopup.style.visibility = "visible";

});

playButton.addEventListener("click", function () {
// Add logic to start the quiz here
// You can redirect to the quiz page or perform other actions.

});

cancelButton.addEventListener("click", function () {
quizPopup.style.visibility = "hidden";
});
});


