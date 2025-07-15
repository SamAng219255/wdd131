function calculateWindChill(T, v) {
	return 35.74 + 0.6215 * T - 35.75 * Math.pow(v, 0.16) + 0.4275 * T * Math.pow(v, 0.16);
}

const temperature = 90;
const wind_speed = 11;
const wind_dir = "NNE";

const temperature_elem = document.getElementById("temperature");
const wind_elem = document.getElementById("wind");
temperature_elem.innerText = `${temperature}°`;
wind_elem.innerText = `${wind_dir} ${wind_speed} mph`;

const wind_chill_elem = document.getElementById("wind-chill");
if(temperature <= 50 && wind_speed > 3) {
	wind_chill_elem.innerText = Math.round(calculateWindChill(temperature, wind_speed)) + "°";
}
else {
	wind_chill_elem.innerText = "N/A";
}