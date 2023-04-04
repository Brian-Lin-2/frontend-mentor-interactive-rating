let currRating = "";
let selectedRating = "";

const numbers = document.querySelectorAll(".number");
const button = document.querySelector(".button");
const userSelection = document.querySelector(".thanks__userSelection")
const ratingScreen = document.querySelector(".rating");
const thankYouScreen = document.querySelector(".thanks");

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        // Deselect previous number.
        if (selectedRating !== "") {
            selectedRating.classList.remove("select");
        }

        currRating = num.textContent.trim();
        num.classList.add("select");

        selectedRating = num;
    })
});

button.addEventListener("click", () => {
    // Make sure you can't select if rating isn't chosen.
    if (currRating === "") {
        return;
    }

    userSelection.textContent = currRating;
    ratingScreen.classList.add("hide");
    thankYouScreen.classList.remove("hide");
});