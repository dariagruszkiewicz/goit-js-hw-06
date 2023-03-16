const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", function () {
	let name = inputEl.value;
	name === ""
		? (outputEl.textContent = `Anonymous`)
		: (outputEl.textContent = `${name}`);
});
