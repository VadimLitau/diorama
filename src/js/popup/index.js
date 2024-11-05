import {popupData} from "../../html/modules/settings/popup/popupData";

document.querySelectorAll(".btn__item__button").forEach((button) => {
	button.addEventListener("click", function () {
		document.body.style.overflow = "hidden";
		const cardId = this.closest(".item").dataset.id;
		const cardInfo = popupData.find((item) => item.id == cardId);
		console.log(cardId);
		if (cardInfo) {
			const popup = document.getElementById("popup-overlay");
			popup.querySelector(".popup__content__logo__img").src = cardInfo.logo;
			popup
				.querySelectorAll(".swiper-slidePopup__img")
				.forEach((img, index) => {
					img.src = cardInfo.photos[index] || "";
				});
			popup.querySelector(".popup__slider__oldPrice").textContent =
				cardInfo.oldPrice;
			popup.querySelector(".popup__slider__newPrice").textContent =
				cardInfo.newPrice;
			popup.querySelector(".popup__content__text").innerHTML =
				cardInfo.description;
			popup.querySelector(".btn__popup__button").href = cardInfo.link;

			popup.style.display = "flex";
		}
	});
});

document
	.getElementById("close-popup-btn")
	.addEventListener("click", function () {
		closePopup();
	});

document
	.getElementById("popup-overlay")
	.addEventListener("click", function (event) {
		if (event.target === this) {
			closePopup(); // Вызов функции для закрытия попапа
		}
	});
function closePopup() {
	document.body.style.overflow = "auto";
	document.getElementById("popup-overlay").style.display = "none";
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closePopup();
	}
});
