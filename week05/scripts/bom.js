const inputElem = document.getElementById("favchap");
const buttonElem = document.querySelector("button");
const listElem = document.getElementById("list");

buttonElem.addEventListener("click", (e) => {
	if(inputElem.value != "") {
		displayList(inputElem.value);
		chaptersArray.push(inputElem.value);
		setChapterList();
		inputElem.value = "";
	}
	inputElem.focus();
});

function displayList(scripture) {
	const li = document.createElement("li");
	const delButton = document.createElement("button");
	li.textContent = scripture;
	delButton.textContent = "❌";
	li.append(delButton);
	list.append(li);

	delButton.addEventListener("click", function(e){
		e.target.parentElement.remove();
		deleteChapter(e.target.parentElement.textContent);
		inputElem.focus();
	});
}

function setChapterList() {
	localStorage.setItem("chapter-list", JSON.stringify(chaptersArray));
}
function getChapterList() {
	return JSON.parse(localStorage.getItem("chapter-list"));
}

function deleteChapter(chapter) {
	chapter = chapter.slice(0, chapter.length - 1);
	chaptersArray = chaptersArray.filter((item) => item !== chapter);
	setChapterList();
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
	displayList(chapter);
});