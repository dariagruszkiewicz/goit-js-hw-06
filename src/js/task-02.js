const ulEl = document.getElementById("ingredients");

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

ingredients.forEach(function (el) {
	const item = document.createElement("li");
	item.textContent = el;
	item.classList.add("item");
	ulEl.append(item);
});
