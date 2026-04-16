//your JS code here. If required.
let content = document.getElementById("meta");
let btn = document.getElementById("enter");
btn.addEventListener('click',()=>{
		let newElement = document.createElement("h1");
		newElement.id = "meta";
		newElement.innerText = "Entered Metaverse";

		content.replaceWith(newElement);
})