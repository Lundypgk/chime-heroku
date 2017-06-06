$("#submit").click(function () {

    //Validation for First Name
    if (!$('#firstName').val()) {
        $("#firstName").css('border-color', 'red');
        $("#firstName").notify(
            "Please Fill In Your First Name", {
                position: "left"
            }
        );
    } else {
        $("#firstName").css('border-color', '');
    }

    //Validation for lastName
    if (!$('#lastName').val()) {
        $("#lastName").css('border-color', 'red');
        $("#lastName").notify(
            "Please Fill In Your Last Name", {
                position: "right"
            }
        );
    } else {
        $("#lastName").css('border-color', '');
    }

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    //Validation for Email
    if (!$('#email').val()) {
        $("#email").css('border-color', 'red');
        $("#email").notify(
            "Please Fill In Your Email", {
                position: "right"
            }
        );
    } else if (!regexEmail.test($('#email').val())) {
        $("#email").css('border-color', 'red');
        $("#email").notify(
            "Not a Valid Email", {
                position: "right"
            }
        );
    } else {
        $("#email").css('border-color', '');
    }

    //Validation for Gender
    if ($("#gender option:selected").text() == "-- Select Gender --") {
        $("#gender").css('border-color', 'red');
        $("#gender").notify(
            "Please Select Your Gender", {
                position: "left"
            }
        );
    } else {
        $("#gender").css('border-color', '');
    }

    //Validation for Birthday
    if (!$('#birthday').val()) {
        $("#birthday").css('border-color', 'red');
        $("#birthday").notify(
            "Please Fill In Your Birthday", {
                position: "right"
            }
        );
    } else {
        $("#birthday").css('border-color', '');
    }

    //Validation for mobileno
    if (!$('#mobileno').val()) {
        $("#mobileno").css('border-color', 'red');
        $("#mobileno").notify(
            "Please Fill In Your Mobile Number", {
                position: "right"
            }
        );
    } else {
        $("#mobileno").css('border-color', '');
    }

    //Validation for Username
    if (!$('#username').val()) {
        $("#username").css('border-color', 'red');
        $("#username").notify(
            "Please Fill In Your Username", {
                position: "right"
            }
        );
    } else {
        $("#username").css('border-color', '');
    }

    //Validation for Password
    if (!$('#password').val()) {
        $("#password").css('border-color', 'red');
        $("#password").notify(
            "Please Fill In Your Passwod", {
                position: "right"
            }
        );
    } else {
        $("#password").css('border-color', '');
    }

    //Validation for Confirm Password
    if (!$('#confirmPassword').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Please Fill In Your Password", {
                position: "right"
            }
        );
    } else {
        $("#confirmPassword").css('border-color', '');
    }
});