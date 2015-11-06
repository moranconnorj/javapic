var enlarged = document.getElementById("image_show");
var images = [];

var buildImages = function () {
	//builds array of image location strings
	for (var i = 1; i < 60; i++){
		if (i < 10){
			images.push("images/pdxcg_0" + i + ".jpg");
		}
		else {
			images.push("images/pdxcg_" + i + ".jpg");
		}		
	}
}
buildImages();

var pic = function (element) {
	var li = document.createElement("li");
	var img = document.createElement("img");
	//creates list item and image elements
	img.src = element;
	img.className = "pics";
	//sources and tags image
	li.appendChild(img);
	gallery.appendChild(li);
	//stuffs image into list item, and then list item into gallery

}

images.forEach(pic); // runs function pic for each item in images 

document.addEventListener("click", function() {
	if (event.target.className === "pics") {
		enlarged.className = 'display_img';
		enlarged.firstChild.src = event.target.src;
	}
	else {
		enlarged.className = 'display_none';
	}})


