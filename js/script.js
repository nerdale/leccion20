// callbackPromedio

function callbackPromedio (a, b, c, callback){
	var promedio = (a+b+c)/3;
	return callback(promedio);
}


//segundero

var cronometro;
function segundero(){
	var seg = 1;
	cronometro = setInterval(function(){
		document.getElementById("segundero").innerHTML = seg++;
	},1000);
}
segundero();

//parar segundero
function parar() {
 clearInterval(cronometro);
}	


