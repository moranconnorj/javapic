//var test = document.getElementsByTagName("STYLE");
//var test = document.getElementsByClassName("jumbotron");
var jumbo = document.getElementById("jumbotron");
var images = [];
var x = 0;
var buildImages = function () {
	for (var i = 1; i < 60; i++){
		if (i < 10){
			images.push('url("images/pdxcg_0' + i + '.jpg")');
		}
		else {
			images.push('url("images/pdxcg_' + i + '.jpg")');
		}		
	}
}
var changeImage = function () {
    jumbo.style.backgroundImage = images[x];
    x++;
    if(x >= images.length){
        x = 0;        
    }
}
buildImages();
setInterval("changeImage()", 1000);



	// if (current < 9) {
	// 	current += 1
	// 	img = "../images/pdxcg_0" + current + ".jpg"
	// }


