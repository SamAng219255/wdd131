const groupDataLocation = "data/groups.json";
const groupId = new URLSearchParams(window.location.search).get("group-id");

document.getElementById("group-id").value = groupId;

fetch(groupDataLocation)
	.then((response) => {
		if(!response.ok) {
			throw new Error(`HTTP Error; Status: ${response.status}`)
		}
		return response.json();
	})
	.then((data) => {
		let groupName;
		data.groups.forEach((group) => {if(group.id == groupId) groupName=group.groupName});
		document.getElementById("submit").value = `Join ${groupName}`;
		document.getElementById("group-name").value = groupName;
	})
	.catch((error) => {
		console.log(`Fetch Error: ${error}`);
	});