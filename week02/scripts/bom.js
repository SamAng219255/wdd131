const inputElem = document.getElementById("favchap");
const buttonElem = document.querySelector("button");
const listElem = document.getElementById("list");

buttonElem.addEventListener("click", function(e){
	if(inputElem.value != "") {
		const li = document.createElement("li");
		const delButton = document.createElement("button");
		li.textContent = inputElem.value;
		delButton.textContent = "❌";
		li.append(delButton);
		list.append(li);

		delButton.addEventListener("click", function(e){
			console.log(foo=e);
			foo.target.parentElement.remove();
		});

		inputElem.value = "";
	}
	inputElem.focus();
});