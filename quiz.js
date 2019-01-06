var count = 1;
var size = 35;
var score = 0;

function start(){
	document.getElementById("start").style.display="none";
	document.getElementById("question"+String(count)).style.display="block";
}

function submit(){
	var qs = document.getElementsByName("q"+String(count));
	var x = qs.length;
	
	for(var i=0; i < x; i++){
		if(qs[i].checked){
			if(qs[i].value=='t'){
				score++;
			}
		}
	}
	document.getElementById("question"+String(count)).style.display="none";
	
	if(count < size){
		document.getElementById("question"+String(count+1)).style.display="block";
	}
	else{
		result();
	}
	count ++;
}

function result(){
	var equi = score/size;
	var holder = document.getElementById("res");
	document.getElementById("question"+String(size)).style.display="none";
	holder.innerHTML = "Your Score is " + score + "<br />" + "Equivalent: " + equi.toFixed(2);
	holder.style.display="block";
	document.getElementById("key").style.display="block";
	
}