//your JS code here. If required.
let content = document.getElementById("meta");
let btn = document.getElementById("enter");
btn.addEventListener('click',()=>{
	content.textContent = "Entered Metaverse";
	content.classList.add("highlight");
})