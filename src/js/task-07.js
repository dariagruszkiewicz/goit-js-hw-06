const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.value = "16";
const changeStyle = () => {
	spanEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", changeStyle);
