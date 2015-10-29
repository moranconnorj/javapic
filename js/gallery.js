
enlarged = document.getElementById("image_show");

var images = [];
var buildImages = function () {
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
	img.src = element;
	img.className = "pics";
	li.appendChild(img);
	gallery.appendChild(li);

}
images.forEach(pic);
document.addEventListener("click", function() {
	if (event.target.className === "pics") {
		enlarged.className = 'display_img';
		enlarged.firstChild.src = event.target.src
	}
	else {
		enlarged.className = 'display_none';
	}})


