const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", function () {
	inputEl.value.length === +inputEl.dataset.length
		? (inputEl.className = "valid")
		: (inputEl.className = "invalid");
});
