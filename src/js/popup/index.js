import {popupData} from "../../html/modules/settings/popup/popupData";

document.querySelectorAll(".btn__item__button").forEach((button) => {
	button.addEventListener("click", function () {
		document.body.style.overflow = "hidden";
		const cardId = this.closest(".item").dataset.id;
		const cardInfo = popupData.find((item) => item.id == cardId);

		if (cardInfo) {
			const popup = document.getElementById("popup-overlay");

			// Заполнение данных
			popup.querySelector(".popup__content__logo__img").src = cardInfo.logo;
			const popupImg = popup.querySelectorAll(".swiper-slide");

			popupImg.forEach((img, index) => {
				img.src = cardInfo.photos[index] || "";
			});
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

			// Открытие попапа после заполнения данных
			popup.classList.add("show");
		}
	});
});
document.querySelectorAll(".btn__item__button16").forEach((button) => {
	button.addEventListener("click", function () {
		document.body.style.overflow = "hidden";
		const cardId = this.closest(".item").dataset.id;
		const cardInfo = popupData.find((item) => item.id == cardId);

		if (cardInfo) {
			const popup = document.getElementById("popup-overlay16");
			popup.querySelector(".popup__content__logo__img").src = cardInfo.logo;
			const popupImg = popup.querySelectorAll(".swiper-slide");

			popupImg.forEach((img, index) => {
				img.src = cardInfo.photos[index] || "";
			});
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

			// Открытие попапа после заполнения данных
			popup.classList.add("show");
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
			closePopup();
		}
	});

function closePopup() {
	const popup = document.getElementById("popup-overlay");

	// Плавное скрытие
	popup.classList.remove("show");
	document.body.style.overflow = "auto";

	// Удаление данных и окончательное скрытие после завершения анимации
	setTimeout(() => {
		popup.querySelector(".popup__content__logo__img").src = "";
		popup.querySelectorAll(".swiper-slidePopup__img").forEach((img) => {
			img.src = "";
		});
		popup.querySelector(".popup__slider__oldPrice").textContent = "";
		popup.querySelector(".popup__slider__newPrice").textContent = "";
		popup.querySelector(".popup__content__text").innerHTML = "";
		popup.querySelector(".btn__popup__button").href = "#";
	}, 300); // Время должно совпадать с transition в CSS (0.3s)
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closePopup();
	}
});

document
	.getElementById("close-popup-btn16")
	.addEventListener("click", function () {
		closePopup16();
	});

document
	.getElementById("popup-overlay16")
	.addEventListener("click", function (event) {
		if (event.target === this) {
			closePopup16();
		}
	});

function closePopup16() {
	const popup = document.getElementById("popup-overlay16");

	// Плавное скрытие
	popup.classList.remove("show");
	document.body.style.overflow = "auto";

	// Удаление данных и окончательное скрытие после завершения анимации
	setTimeout(() => {
		popup.querySelector(".popup__content__logo__img").src = "";
		popup.querySelectorAll(".swiper-slidePopup__img").forEach((img) => {
			img.src = "";
		});
		popup.querySelector(".popup__slider__oldPrice").textContent = "";
		popup.querySelector(".popup__slider__newPrice").textContent = "";
		popup.querySelector(".popup__content__text").innerHTML = "";
		popup.querySelector(".btn__popup__button").href = "#";
	}, 300); // Время должно совпадать с transition в CSS (0.3s)
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closePopup16();
	}
});
