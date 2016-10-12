// callbackPromedio

function callbackPromedio (a, b, c, callback){
	var promedio = (a+b+c)/3;
	return callback(promedio);
}


//segundero
	
function segundero(){
	var seg = 1;
	setInterval(function(){
		document.getElementById("titulo").innerHTML = seg++;
	},1000);
}
segundero();
