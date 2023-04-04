let rating = "";
let active = "";

const numbers = document.querySelectorAll(".number");
const button = document.querySelector(".button");

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        rating = num.textContent.trim();
        num.classList.add("select");

        // Deselect previous number.
        if (active !== "") {
            active.classList.remove("select");
        }

        active = num;
    }
)});

button.addEventListener("click", () => {
    console.log(button);
});