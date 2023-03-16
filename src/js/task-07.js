// Napisz skrypt, który reaguje na zmianę wartości input#font - size - control(zdarzenie input)
// i zmienia styl inline span#text aktualizując właściwość font - size.
// W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
