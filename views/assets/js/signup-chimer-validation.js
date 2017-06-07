$('#username').keyup(function () {
    alert("Handler for .keyup() called.");
});

$("#submit").click(function (e) {
    var firstNameValidation = false,
        lastNameValidation = false,
        emailValidation = false,
        genderValidation = false,
        birthdayValidation = false,
        mobileNoValidation = false,
        usernameValidation = false,
        passwordValidation = false,
        confirmPasswordValidation = false;

    //Validation for First Name
    if (!$('#firstName').val()) {
        $("#firstName").css('border-color', 'red');
        $("#firstName").notify(
            "Please Fill In Your First Name", {
                position: "left",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#firstName").css('border-color', '');
        firstNameValidation = true;
    }

    //Validation for lastName
    if (!$('#lastName').val()) {
        $("#lastName").css('border-color', 'red');
        $("#lastName").notify(
            "Please Fill In Your Last Name", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#lastName").css('border-color', '');
        lastNameValidation = true;
    }

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    //Validation for Email
    if (!$('#email').val()) {
        $("#email").css('border-color', 'red');
        $("#email").notify(
            "Please Fill In Your Email", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else if (!regexEmail.test($('#email').val())) {
        $("#email").css('border-color', 'red');
        $("#email").notify(
            "Not a Valid Email", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#email").css('border-color', '');
        emailValidation = true;
    }

    //Validation for Gender
    if ($("#gender option:selected").text() == "-- Select Gender --") {
        $("#gender").css('border-color', 'red');
        $("#gender").notify(
            "Please Select Your Gender", {
                position: "left",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#gender").css('border-color', '');
        genderValidation = true;
    }

    //Validation for Birthday
    if (!$('#birthday').val()) {
        $("#birthday").css('border-color', 'red');
        $("#birthday").notify(
            "Please Fill In Your Birthday", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#birthday").css('border-color', '');
        birthdayValidation = true;
    }

    //Validation for mobileno
    if (!$('#mobileNo').val()) {
        $("#mobileNo").css('border-color', 'red');
        $("#mobileNo").notify(
            "Please Fill In Your Mobile Number", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#mobileNo").css('border-color', '');
        mobileNoValidation = true;
    }

    //Validation for Username
    if (!$('#username').val()) {
        $("#username").css('border-color', 'red');
        $("#username").notify(
            "Please Fill In Your Username", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#username").css('border-color', '');
        usernameValidation = true;
    }

    //Validation for Password
    if (!$('#password').val()) {
        $("#password").css('border-color', 'red');
        $("#password").notify(
            "Please Fill In Your Passwod", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#password").css('border-color', '');
        passwordValidation = true;
    }

    //Validation for Confirm Password
    if (!$('#confirmPassword').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Please Fill In Your Password", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
        // validation = false;
        e.preventDefault();
    } else if ($('#confirmPassword').val() != $('#password').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Password Mismatched !", {
                position: "right",
                autoHideDelay: 1200,
            }
        );
    } else {
        $("#confirmPassword").css('border-color', '');
        confirmPasswordValidation = true;
    }

    if (firstNameValidation &&
        lastNameValidation &&
        emailValidation &&
        genderValidation &&
        birthdayValidation &&
        mobileNoValidation &&
        usernameValidation &&
        passwordValidation &&
        confirmPasswordValidation) {
        $.ajax({
            type: "POST",
            url: "chimerSignUp",
            data: {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                email: $('#email').val(),
                gender: $('#gender').val(),
                birthday: $('#birthday').val(),
                mobileNo: $('#mobileNo').val(),
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function (msg) {
                alert('Success');
                window.location = "/index-chime";
            }
        })
    }
});