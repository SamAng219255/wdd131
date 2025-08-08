const groupDataLocation = "data/groups.json"; // Would normally be an API endpoint but GitHub Pages won't allow that.
// I was tempted to try adding an endpoint to my own site but that seemed too much work for how far beyond the project's scope it was.

let initialized = false;
let groups = [];

const params = new URLSearchParams(window.location.search);
let filter = params.get("filter") || "none";
let sort = params.get("sort") || "id";

function createGroupCard(group) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("group-card");

	const infoWrapper = document.createElement("div");

	const groupName = document.createElement("h3");
	groupName.innerText = `${group.groupName}`;
	infoWrapper.appendChild(groupName);

	const row1 = document.createElement("p");
	row1.innerText = `Campaign: ${group.campaignName}, System: ${group.gameSystem}`;
	infoWrapper.appendChild(row1);

	const row2 = document.createElement("p");
	row2.innerText = `Posted by: ${group.ownerUsername}`;
	infoWrapper.appendChild(row2);

	const row3 = document.createElement("p");
	row3.innerText = `Meeting Time: ${group.meetingTime}`;
	infoWrapper.appendChild(row3);

	const row4 = document.createElement("p");
	row4.innerText = `Meeting Type: ${group.meetingType}, Meeting Place: ${group.meetingPlace}`;
	infoWrapper.appendChild(row4);

	wrapper.appendChild(infoWrapper);

	const joinWrapper = document.createElement("div");

	const playerCount = document.createElement("p");
	playerCount.classList.add("player-count");
	playerCount.innerText = `${group.playerCount} / ${group.maxPlayerCount}\nPlayers`;
	joinWrapper.appendChild(playerCount);

	const joinBtn = document.createElement("a");
	joinBtn.href = `./join-group.html?group-id=${group.id}`;
	joinBtn.innerText = "Join Group";
	joinWrapper.appendChild(joinBtn);

	wrapper.appendChild(joinWrapper);

	return wrapper;
}

function updateGroups() {
	let filterFunc = (group) => {return true};
	switch(filter) {
		case "online":
			filterFunc = (group) => {return group.meeting_type == "online"};
			break;
		case "in-person":
			filterFunc = (group) => {return group.meeting_type == "in-person"};
			break;
		case "1e":
			filterFunc = (group) => {return group.game_system == "Pathfinder 1E"};
			break;
		case "starfinder":
			filterFunc = (group) => {return group.game_system == "Starfinder"};
			break;
		case "2e":
			filterFunc = (group) => {return group.game_system == "Pathfinder 2E"};
			break;
	}
	let groupsFilteredSorted = groups.filter(filterFunc);

	function parseNumber(x) {
		const num=x.replaceAll(',','').replaceAll('\xa0',' ');
		const fractionMatch=num.match(/^[+-]? ?(\d+) ?\/ ?(\d+)/);
		if(num==='—')
			return 0;
		else if(num.startsWith('0x'))
			return parseInt(num);
		else if(fractionMatch)
			return parseInt(fractionMatch[1])/parseInt(fractionMatch[2]);
		else
			return parseFloat(num);
	}
	function comp(a, b) {
		const A=a.toString();
		const B=b.toString();
		let numA=parseNumber(A);
		let numB=parseNumber(B);
		if(isNaN(numA) || isNaN(numB)) {
			if(!isNaN(numA) && B.trim()==="")
				return Math.sign(numA);
			else if(!isNaN(numB) && A.trim()==="")
				return -Math.sign(numB);
			let trimmedA=A.trim().toLowerCase();
			let trimmedB=B.trim().toLowerCase();
			if(trimmedA.startsWith('the '))
				trimmedA=trimmedA.slice(4);
			if(trimmedB.startsWith('the '))
				trimmedB=trimmedB.slice(4);
			return trimmedA.localeCompare(trimmedB);
		}
		return Math.sign(numA-numB);
	}
	groupsFilteredSorted.sort((a,b) => {return comp(a[sort], b[sort])});

	const groupList = document.getElementById("group-list");
	groupList.innerHTML = "";
	groupsFilteredSorted.forEach(group => groupList.appendChild(createGroupCard(group)));
}

function getGroups() {
	fetch(groupDataLocation)
		.then((response) => {
			if(!response.ok) {
				throw new Error(`HTTP Error; Status: ${response.status}`)
			}
			return response.json();
		})
		.then((data) => {
			groups = data.groups;
			updateGroups();
		})
		.catch((error) => {
			console.log(`Fetch Error: ${error}`);
		});
}

getGroups();