function validated() {

 	function kiemTraEmail(email) {
        var regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
        return regexEmail.test(email);
	}
  	var email = document.forms["form"]["email"].value;
	  	if (!kiemTraEmail(email)) {
	    alert("Sai ten dang nhap");
	  	}
  	var pass = document.getElementById("pass").value;
        if (pass == "hien123"){
        	alert("Đăng nhập thành công!");
     	}
     	else{
       		alert("Sai mật khẩu");
       	}
     	return false;
}

/*
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

function validated(){
	if (email.value != /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
}
*/