function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");

const createBoxes = (amount) => {
	amount = inputEl.value;
	const newDiv = document.createElement("div");
	newDiv.style.width = "30px";
	newDiv.style.height = "30px";
	newDiv.style.background = getRandomHexColor();
	divBoxes.append(newDiv);
};

const destroyBoxes = () => {
	divBoxes.remove();
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
