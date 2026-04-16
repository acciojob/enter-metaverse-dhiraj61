//your JS code here. If required.
let content = document.getElementById("meta");
let btn = document.getElementById("enter");
btn.addEventListener('click', () => {
	content.outerHTML = "<h1 id='meta'>Entered Metaverse</h1>";
});