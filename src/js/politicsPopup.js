const politicsBtn = document.getElementById("politics");
const popupPolitics = document.getElementById("cooperationPopup");
politicsBtn.addEventListener("click", () => {
	document.body.style.overflow = "hidden";
	popupPolitics.classList.add("show");
});

function closePopup() {
	popupPolitics.classList.remove("show");
	document.body.style.overflow = "auto";
}

document
	.getElementById("close-popup-btn-politics")
	.addEventListener("click", function () {
		closePopup();
	});

document
	.getElementById("cooperationPopup")
	.addEventListener("click", function (event) {
		if (event.target === this) {
			closePopup();
		}
	});
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closePopup();
	}
});
