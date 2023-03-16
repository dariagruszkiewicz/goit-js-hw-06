const counter = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", function () {
	counterValue -= 1;
	counter.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
	counterValue += 1;
	counter.textContent = counterValue;
});
