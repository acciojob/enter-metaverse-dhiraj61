//your JS code here. If required.
let btn = document.getElementById("enterBtn");

btn.addEventListener('click', () => {
	document.getElementById("status").outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});