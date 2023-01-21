const burgerButton = document.querySelector("#burger-button");
const popup = document.querySelector("#popup");

const body = document.body;
const header = document.querySelector("#header");

burgerButton.addEventListener("click", burgerHandler);

function burgerHandler(e) {
	e.preventDefault();
	popup.classList.toggle("popup-open");
	burgerButton.classList.toggle("burger-button-active");
	body.classList.toggle('noScroll');
}

window.addEventListener('scroll', () => {
	if (window.innerWidth > 560) {
		if (window.scrollY > 0) {
			header.classList.add('header-scrolled');
			header.classList.add("header-minimize");
		} else {
			header.classList.remove('header-scrolled');
				header.classList.remove("header-minimize");
		}
	}
});

console.log("Ok!");