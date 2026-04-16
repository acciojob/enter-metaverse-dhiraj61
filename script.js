//your JS code here. If required.
let btn = document.getElementById("enter");

btn.addEventListener('click', () => {
	document.getElementById("meta").outerHTML = "<h1 id='meta'>Entered Metaverse</h1>";
});