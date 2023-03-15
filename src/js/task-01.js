const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

console.log(
	`Category: ${categories[0].firstElementChild.textContent}
    Elements: ${categories[0].lastElementChild.children.length}`
);

console.log(
	`Category: ${categories[1].firstElementChild.textContent}
    Elements: ${categories[1].lastElementChild.children.length}`
);

console.log(
	`Category: ${categories[2].firstElementChild.textContent}
    Elements: ${categories[2].lastElementChild.children.length}`
);
