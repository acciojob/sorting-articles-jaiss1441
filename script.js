//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const Band = document.getElementById("band");

bands.forEach(function (item) {
	const li = document.createElement("li");
	 li.textContent = item;
	Band.appendChild(li);
	
});
