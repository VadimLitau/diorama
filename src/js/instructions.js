import {
	data8,
	data16,
} from "../html/modules/settings/instructions/instructionsData";
const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const cardsContainer8 = document.getElementById("cardsContainer8");
const cardsContainer16 = document.getElementById("cardsContainer16");
const data = [...data8, ...data16];

// Функция отображения карточек
function displayCards(cards, container) {
	container.innerHTML = ""; // Очистить контейнер
	if (cards.length === 0) {
		const noResults = document.createElement("div");
		noResults.classList.add("none");
		noResults.textContent = "Нет результатов";
		container.appendChild(noResults);
	} else {
		cards.forEach((card) => {
			// const cardElement = document.createElement("div");
			// cardElement.classList.add("card");
			// cardElement.textContent = `${card.name}`;
			// container.appendChild(cardElement);
			const cardElement = document.createElement("div");
			cardElement.classList.add("instructions__card__cardItem");
			cardElement.id = `${card.id}`;

			// Создаем элемент <p> и добавляем имя
			const nameElement = document.createElement("p");
			nameElement.textContent = `${card.name}`;
			cardElement.appendChild(nameElement);

			// // Создаем первую кнопку
			// const button1 = document.createElement("a");
			// button1.classList.add("instructions__card__instructionBtn");
			// button1.href = `${card.pdfLink}`;
			// button1.target = "_blank"; // Открытие в новом окне
			// button1.textContent = "инструкция pdf";
			// cardElement.appendChild(button1);

			// // Создаем вторую кнопку
			// const button2 = document.createElement("a");
			// button2.classList.add("instructions__card__videoInstructionBtn");
			// button2.href = `${card.videoLink}`;
			// button2.target = "_blank"; // Открытие в новом окне
			// button2.textContent = "видео-инструкция";
			// cardElement.appendChild(button2);
			const button1 = document.createElement("a");
			button1.classList.add("instructions__card__instructionBtn");
			button1.href = `${card.pdfLink}`;
			button1.target = "_blank"; // Открытие в новом окне

			const span1 = document.createElement("span");
			span1.textContent = "инструкция pdf";
			button1.appendChild(span1);

			cardElement.appendChild(button1);

			// Создаем вторую кнопку
			const button2 = document.createElement("a");
			button2.classList.add("instructions__card__videoInstructionBtn");
			button2.href = `${card.videoLink}`;
			button2.target = "_blank"; // Открытие в новом окне

			const span2 = document.createElement("span");
			span2.textContent = "видео-инструкция";
			button2.appendChild(span2);

			cardElement.appendChild(button2);
			container.appendChild(cardElement);
		});
	}
}

// Отображение всех карточек при загрузке страницы
displayCards(data8, cardsContainer8);
displayCards(data16, cardsContainer16);

// Обработка ввода текста
searchInput.addEventListener("input", () => {
	const query = searchInput.value.toLowerCase();
	dropdown.innerHTML = ""; // Очистить выпадающее меню

	if (query) {
		const filteredData = data.filter((item) =>
			item.name.toLowerCase().includes(query)
		);

		// Обновить блоки cardsContainer8 и cardsContainer16
		const filteredData8 = data8.filter((item) =>
			item.name.toLowerCase().includes(query)
		);
		const filteredData16 = data16.filter((item) =>
			item.name.toLowerCase().includes(query)
		);

		displayCards(filteredData8, cardsContainer8);
		displayCards(filteredData16, cardsContainer16);

		// Заполнить выпадающий список
		filteredData.forEach((item) => {
			const dropdownItem = document.createElement("div");
			dropdownItem.classList.add("dropdown-item");
			dropdownItem.textContent = item.name;
			dropdownItem.addEventListener("click", () => {
				searchInput.value = item.name; // Заполнить инпут
				dropdown.style.display = "none"; // Скрыть выпадающее меню

				// Очистить оба контейнера
				cardsContainer8.innerHTML = "";
				cardsContainer16.innerHTML = "";

				// Показать выбранную карточку в одном контейнере, а в другом пустой блок
				if (item.id <= 5) {
					displayCards([item], cardsContainer8);
					displayCards([], cardsContainer16); // Пустой блок в другом контейнере
				} else {
					displayCards([item], cardsContainer16);
					displayCards([], cardsContainer8); // Пустой блок в другом контейнере
				}
			});
			dropdown.appendChild(dropdownItem);
		});

		dropdown.style.display = filteredData.length ? "block" : "none";
	} else {
		// Показать все карточки, если инпут пуст
		displayCards(data8, cardsContainer8);
		displayCards(data16, cardsContainer16);
		dropdown.style.display = "none";
	}
});

// Скрыть выпадающее меню при клике вне инпута
document.addEventListener("click", (e) => {
	if (!e.target.closest("#searchInput")) {
		dropdown.style.display = "none";
	}
});
