//your JS code here. If required.
let content = document.getElementById("status");
let btn = document.getElementById("enterBtn");

btn.addEventListener('click', () => {
	content.innerHTML = "<h1>Entered Metaverse</h1>";
});