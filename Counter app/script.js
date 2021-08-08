let count = 0;
let saveel = document.getElementById("save-el");
let none = document.getElementById('none');
function increment(){
	count = count+1;
	document.getElementById("count-el").innerText=count;
}
function save(){
	none.innerText=" "; 
	let counts = count + " - ";
	saveel.textContent += counts;
}
function reset(){
	location.reload();
}
