var form = document.getElementById("signup");
var text = document.querySelectorAll("input[type=text]"); //array of 2 text input boxes (name and username)
var email = document.querySelectorAll("input[type=email]");
var reg;
form.noValidate = "novalidate";

function checkNameInput() {
	//checks if name is not nothing
	if (!text[0].value) { 
		alert("FILL IN NAME");
		return false;
	}
	return true
}

function checkUsername() {
	// checks if username is not nothing
	if (!text[1].value) {
		alert("FILL IN USERNAME");
		return false
	}
	return true
}

function checkEmail() {
	//checks if email matches email regex format
	reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (!reg.test(email[0].value)) {
		alert("EMAIL IN FORMAT xxxx@xxxx.xxx");
		return false
	}
	return true
}


function checkInput() {
	// calls 3 input checks and loads to gallery.html if they all pass
	if (checkNameInput() && checkUsername() && checkEmail()) {
		window.location.href = "gallery.html?" + text[0].value;
	}
}
		
checkInput();


form.addEventListener("click", function() {
	if (event.target.type === "submit") {
		event.preventDefault();
		checkInput();
		//console.log(name)
	}
})
