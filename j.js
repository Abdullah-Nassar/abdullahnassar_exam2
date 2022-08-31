document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById("computer").addEventListener("click", function(){
		//Call server to get the name
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
				var name=this.responseText;
				document.querySelector(".inner1").innerHTML=name;
			}
		};
		xttp.open("GET", "table.html", true);
		xttp.send(null);//for POST only
	});


    document.getElementById("communication").addEventListener("click", function(){
		//Call server to get the name
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
				var name=this.responseText;
				document.querySelector(".inner1").innerHTML=name;
			}
		};
		xttp.open("GET", "table.html", true);
		xttp.send(null);//for POST only
	});


    document.getElementById("inti").addEventListener("click", function(){
		//Call server to get the name
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
				var name=this.responseText;
				document.querySelector(".inner1").innerHTML=name;
			}
		};
		xttp.open("GET", "table.html", true);
		xttp.send(null);//for POST only
	});
});