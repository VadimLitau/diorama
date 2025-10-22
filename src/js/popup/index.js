import {popupData} from "../../html/modules/settings/popup/popupData";
function metrikaListener(metrikaId) {
	ym(99092432, "reachGoal", `${metrikaId}`);
}

document.querySelectorAll(".btn__item__button").forEach((button) => {
	button.addEventListener("click", function () {
		document.body.style.overflow = "hidden";
		const cardId = this.closest(".item").dataset.id;
		const cardInfo = popupData.find((item) => item.id == cardId);

		if (cardInfo) {
			const popup = document.getElementById("popup-overlay");
			const metrikaLink = popup.querySelector(".btn__popup__button");

			// Проверяем, чтобы предыдущий слушатель не дублировался
			const listener = () => metrikaListener(cardInfo.metrikaBuyId);

			// Сначала снимаем любые ранее добавленные слушатели
			metrikaLink.replaceWith(metrikaLink.cloneNode(true));
			const newMetrikaLink = popup.querySelector(".btn__popup__button");

			// Назначаем новый слушатель
			newMetrikaLink.addEventListener("click", listener);

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

			// Закрытие попапа с очисткой
			const closeButton = document.getElementById("close-popup-btn");
			const overlay = document.getElementById("popup-overlay");

			const closePopup = () => {
				popup.classList.remove("show");
				document.body.style.overflow = "auto";

				// Удаляем слушатель для метрики
				newMetrikaLink.removeEventListener("click", listener);
				// Сброс данных попапа
				setTimeout(() => {
					popup.querySelector(".popup__content__logo__img").src = "";
					popup.querySelectorAll(".swiper-slidePopup__img").forEach((img) => {
						img.src = "";
					});
					popup.querySelector(".popup__slider__oldPrice").textContent = "";
					popup.querySelector(".popup__slider__newPrice").textContent = "";
					popup.querySelector(".popup__content__text").innerHTML = "";
					popup.querySelector(".btn__popup__button").href = "#";
				}, 300);
			};

			closeButton.addEventListener("click", closePopup, {once: true});
			overlay.addEventListener(
				"click",
				(event) => {
					if (event.target === overlay) closePopup();
				},
				{once: true}
			);
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

			// Проверяем, чтобы предыдущий слушатель не дублировался
			const metrikaLink = popup.querySelector(".btn__popup__button");
			const listener = () => metrikaListener(cardInfo.metrikaBuyId);

			// Удаляем ранее добавленные слушатели
			metrikaLink.replaceWith(metrikaLink.cloneNode(true));
			const newMetrikaLink = popup.querySelector(".btn__popup__button");

			// Назначаем новый слушатель
			newMetrikaLink.addEventListener("click", listener);

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

			// Открытие попапа
			popup.classList.add("show");

			// Закрытие попапа с очисткой
			const closeButton = popup.querySelector("#close-popup-btn16");
			const overlay = document.getElementById("popup-overlay16");

			const closePopup = () => {
				popup.classList.remove("show");
				document.body.style.overflow = "auto";

				// Удаляем слушатель для метрики
				newMetrikaLink.removeEventListener("click", listener);

				// Сброс данных попапа
				setTimeout(() => {
					popup.querySelector(".popup__content__logo__img").src = "";
					popup.querySelectorAll(".swiper-slidePopup__img").forEach((img) => {
						img.src = "";
					});
					popup.querySelector(".popup__slider__oldPrice").textContent = "";
					popup.querySelector(".popup__slider__newPrice").textContent = "";
					popup.querySelector(".popup__content__text").innerHTML = "";
					popup.querySelector(".btn__popup__button").href = "#";
				}, 300);
			};

			closeButton.addEventListener("click", closePopup, {once: true});
			overlay.addEventListener(
				"click",
				(event) => {
					if (event.target === overlay) closePopup();
				},
				{once: true}
			);
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
