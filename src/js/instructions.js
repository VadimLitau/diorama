import {
	data8,
	data16,
} from "../html/modules/settings/instructions/instructionsData";
const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const cardsContainer8 = document.getElementById("cardsContainer8");
const cardsContainer16 = document.getElementById("cardsContainer16");
const data = [...data8, ...data16];

function displayCards(cards, container) {
	container.innerHTML = "";
	if (cards.length === 0) {
		const noResultsDiv = document.createElement("div");
		noResultsDiv.classList.add("none");

		const noResultsText = document.createElement("p");
		noResultsText.textContent = "Нет результатов";

		noResultsDiv.appendChild(noResultsText);
		container.appendChild(noResultsDiv);
	} else {
		cards.forEach((card) => {
			const cardElement = document.createElement("div");
			cardElement.classList.add("instructions__card__cardItem");
			cardElement.id = `${card.id}`;
			const nameElement = document.createElement("p");
			nameElement.textContent = `${card.name}`;
			cardElement.appendChild(nameElement);

			const button1 = document.createElement("a");
			button1.classList.add("instructions__card__instructionBtn");
			button1.href = `${card.pdfLink}`;
			button1.target = "_blank";

			const span1 = document.createElement("span");
			span1.textContent = "инструкция pdf";
			button1.appendChild(span1);

			cardElement.appendChild(button1);

			const button2 = document.createElement("a");
			button2.classList.add("instructions__card__videoInstructionBtn");
			button2.href = `${card.videoLink}`;
			button2.target = "_blank";

			const span2 = document.createElement("span");
			span2.textContent = "видео-инструкция";
			button2.appendChild(span2);

			cardElement.appendChild(button2);
			container.appendChild(cardElement);
		});
	}
}

displayCards(data8, cardsContainer8);
displayCards(data16, cardsContainer16);

searchInput.addEventListener("input", () => {
	const query = searchInput.value.toLowerCase();
	dropdown.innerHTML = "";
	if (query) {
		const filteredData = data.filter((item) =>
			item.name.toLowerCase().includes(query)
		);

		const filteredData8 = data8.filter((item) =>
			item.name.toLowerCase().includes(query)
		);
		const filteredData16 = data16.filter((item) =>
			item.name.toLowerCase().includes(query)
		);

		displayCards(filteredData8, cardsContainer8);
		displayCards(filteredData16, cardsContainer16);

		filteredData.forEach((item) => {
			const dropdownItem = document.createElement("div");
			dropdownItem.classList.add("dropdown-item");
			dropdownItem.textContent = item.name;
			dropdownItem.addEventListener("click", () => {
				searchInput.value = item.name;
				dropdown.style.display = "none";

				cardsContainer8.innerHTML = "";
				cardsContainer16.innerHTML = "";

				if (item.id <= 5) {
					displayCards([item], cardsContainer8);
					displayCards([], cardsContainer16);
				} else {
					displayCards([item], cardsContainer16);
					displayCards([], cardsContainer8);
				}
			});
			dropdown.appendChild(dropdownItem);
		});

		dropdown.style.display = filteredData.length ? "block" : "none";
	} else {
		displayCards(data8, cardsContainer8);
		displayCards(data16, cardsContainer16);
		dropdown.style.display = "none";
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.closest("#searchInput")) {
		dropdown.style.display = "none";
	}
});
