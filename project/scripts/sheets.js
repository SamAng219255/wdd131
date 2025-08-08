const ctrlButton = document.getElementById("show-controls");
const ctrlMenu = document.getElementById("controls");
const prntButton = document.getElementById("print-button");

ctrlButton.addEventListener("click", function(e){
	ctrlMenu.classList.toggle("open");

	if(ctrlMenu.classList.contains("open")) {
		ctrlButton.innerText = "Hide Controls";
		ctrlButton.ariaLabel = "Character Sheet Controls, Open";
	}
	else {
		ctrlButton.innerText = "Show Controls";
		ctrlButton.ariaLabel = "Character Sheet Controls, Closed";
	}
});

prntButton.addEventListener("click", function(e) {
	print();
});