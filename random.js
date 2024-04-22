function generateWord(){
	var words=["water","rocks","banana","apple","cabbage","ugali"];
	var genButton=document.getElementById('btn')

	var randomIndex=Math.floor(Math.random()*words.length);
	var randomWord=words[randomIndex];
	document.querySelector("p").textContent=randomWord;
	
}