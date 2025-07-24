const navButton = document.getElementById("nav-button");
const navMenu = document.querySelector("header>nav");

navButton.addEventListener("click", function(e){
  navButton.classList.toggle("open");
  navMenu.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Columbia River Washington",
    location: "Richland, Washington, United States",
    dedicated: "2000, October, 28",
    area: 16880,
    imageUrl: "https://assets.churchofjesuschrist.org/c8/73/c873ec0b5e4cb47df9d2c87ea01145929fe67c1f/columbia_river_temple_lds.jpg"
  },
  {
    templeName: "Manhattan New York",
    location: "New York, New York, United States",
    dedicated: "2004, June, 13",
    area: 20630,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2717080e04aa153631120f5a16692ce1feebe67f/full/800%2C/0/default"
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah, United States",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/4ad23befcc965e7c016c6bab9dbd178dad8c2932/full/800%2C/0/default"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl: "https://churchofjesuschrist.org/imgs/1490bdca1acee69e947c5225f1dac282908c0ac2/full/800%2C/0/default"
  },
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York, United States",
    dedicated: "2000, April, 6",
    area: 10900,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/58874de8439f9881d083269f2fed2b204b03e38f/full/800%2C/0/default"
  },
  {
    templeName: "Provo Utah Rock Canyon",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 130825,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/15e3f7bd07d84cbff0cb7440cc9b32253706fc39/full/800%2C/0/default"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/08d5a9e90a0c8347a61d17335775c5e118b33a9a/full/800%2C/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/800%2C/0/default"
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/e47e84aefa0d22dffb5eb618c4b4be8f21c6c3d3/full/800%2C/0/default"
  }
];
const main = document.getElementsByTagName("main")[0];
const h2 = document.getElementsByTagName("h2")[0];

const buttons = document.getElementsByClassName("filter-option");
for(let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", (e)=>{
		document.querySelectorAll(".card").forEach((card)=>card.remove());
		
		const album_filter = e.target.innerText.toLowerCase();

		h2.innerText = e.target.innerText;

		let filter_check = (temple) => {return true;};
		switch(album_filter) {
			case "old":
				filter_check = (temple) => {return parseInt(temple.dedicated.split(",")[0]) < 1900;};
				break;
			case "new":
				filter_check = (temple) => {return parseInt(temple.dedicated.split(",")[0]) > 2000;};
				break;
			case "large":
				filter_check = (temple) => {return temple.area > 90000;};
				break;
			case "small":
				filter_check = (temple) => {return temple.area < 10000;};
				break;
		}

		function addEntry(card, label, value) {
			const entry = document.createElement("p");
			const label_elem = document.createElement("span");
			label_elem.classList.add("entry-label");
			label_elem.innerText = label + ": ";
			entry.appendChild(label_elem);
			const value_elem = document.createElement("span");
			value_elem.classList.add("entry-value");
			value_elem.innerText = value;
			entry.appendChild(value_elem);
			card.appendChild(entry);
		}
		temples.filter(filter_check).forEach((temple) => {
			const card = document.createElement("div");
			card.classList.add("card");
			const temple_name = document.createElement("h2");
			temple_name.innerText = temple.templeName;
			card.appendChild(temple_name);
			addEntry(card, "Location", temple.location);
			addEntry(card, "Dedicated", temple.dedicated);
			addEntry(card, "Size", `${temple.area} sq ft`);
			const image = document.createElement("img");
			image.alt = temple.templeName;
			image.loading = "lazy";
			image.src = temple.imageUrl;
			card.appendChild(image);
			main.appendChild(card);
		});
	});
}