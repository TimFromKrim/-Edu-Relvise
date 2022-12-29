const burgerButton = document.querySelector("#burger-button");
const popup = document.querySelector("#popup");
console.log("Ok!");

burgerButton.addEventListener("click", burgerHandler);

function burgerHandler(e) {
	e.preventDefault();
	popup.classList.toggle("popup-open");
}