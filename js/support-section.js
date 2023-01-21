const cardCenter = document.querySelector("#supportCardCenter");
const card1 = document.querySelector("#supportCard1");
const card3 = document.querySelector("#supportCard3");

isMobile = {
	Android: function() {
			return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if ((isMobile.any() != true) && (window.innerWidth > 1100)) {
	console.log('is not mobile !');

	card1.addEventListener("mouseenter", centerRemove);
	card1.addEventListener("mouseleave", centerAdd);

	card3.addEventListener("mouseenter", centerRemove);
	card3.addEventListener("mouseleave", centerAdd);

	function centerRemove() {
		cardCenter.classList.remove("support-card_center");
		console.log("Yess!!");
	}

	function centerAdd() {
		cardCenter.classList.add("support-card_center");
	}
}

