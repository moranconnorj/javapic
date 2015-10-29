var form = document.getElementById("signup");
form.noValidate = "novalidate";
var text = document.querySelectorAll("input[type=text]");
var email = document.querySelectorAll("input[type=email]")
var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkInput() {
	if (!text[0].value) {
		alert("FILL IN NAME");
	}
	if (!text[1].value) {
		alert("FILL IN USERNAME");
	}
	if (!reg.test(email[0].value)) {
		alert("EMAIL IN FORMAT xxxx@xxxx.xxx");
	}
}


form.addEventListener("click", function() {
	if (event.target.type === "submit") {
		checkInput();
	}
})
