let rating = "";
let active = "";

const numbers = document.querySelectorAll(".number");
const button = document.querySelector(".button");

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        // Deselect previous number.
        if (active !== "") {
            active.classList.remove("select");
        }
        
        rating = num.textContent.trim();
        num.classList.add("select");

        active = num;
    }
)});

button.addEventListener("click", () => {
    console.log(button);
});