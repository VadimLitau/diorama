const menuItems = document.querySelectorAll(".menu__item");

function closePopup() {
	document.body.style.overflow = "auto";
	document.getElementById("menuBurger").style.display = "none";
	document.getElementById("burger-button").style.display = "flex";
}

menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		if (window.innerWidth < 1279) {
			closePopup();
		}
	});
});

document.getElementById("burger-button").addEventListener("click", function () {
	document.body.style.overflow = "hidden";
	document.getElementById("menuBurger").style.display = "flex";
	document.getElementById("burger-button").style.display = "none";
});

document.getElementById("close-button").addEventListener("click", function () {
	closePopup();
});

document
	.getElementById("menuBurgerCatalog")
	.addEventListener("click", function () {
		closePopup();
	});
