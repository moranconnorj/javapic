var jumbo = document.getElementById("jumbotron");
var images = [];

var buildImages = function () {
	//builds array of image location strings
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
	//cycles through background image
	var x;
    jumbo.style.backgroundImage = images[x];
    x++;
    x = (x % 60); // cycles back to zero when x = 60
}

buildImages();
setInterval("changeImage()", 20000);
//calls changeImage to cycle at 20 seconds


