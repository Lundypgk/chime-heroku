$("#submit").click(function () {
    var brandNameValidation = false,
        industryValidation = false,
        contactNoValidation = false,
        addressValidation = false,
        postalValidation = false,
        unitNoValidation = false,
        instagramValidation = false,
        facebookValidation = false,
        emailValidation = false,
        passwordValidation = false
    confirmPasswordValidation = false;

    //Validation for First Name
    if (!$('#brandName').val()) {
        $("#brandName").css('border-color', 'red');
        $("#brandName").notify(
            "Please Fill In Your Brand Name", {
                position: "right"
            }
        );
    } else {
        $("#brandName").css('border-color', '');
        brandNameValidation = true;
    }

    //Validation for Industry
    if ($("#industry option:selected").text() == "-- Select Industry --") {
        $("#industry").css('border-color', 'red');
        $("#industry").notify(
            "Please Select Your Industry", {
                position: "left"
            }
        );
    } else {
        $("#industry").css('border-color', '');
        industryValidation = true;
    }

    //Validation for mobileno
    if (!$('#contactNo').val()) {
        $("#contactNo").css('border-color', 'red');
        $("#contactNo").notify(
            "Please Fill In Your Mobile Number", {
                position: "right"
            }
        );
    } else {
        $("#contactNo").css('border-color', '');
        contactNoValidation = true;
    }

    //Validation for address
    if (!$('#address').val()) {
        $("#address").css('border-color', 'red');
        $("#address").notify(
            "Please Fill In Your Address", {
                position: "right"
            }
        );
    } else {
        $("#address").css('border-color', '');
        addressValidation = true;
    }

    //Validation for postal
    if (!$('#postal').val()) {
        $("#postal").css('border-color', 'red');
        $("#postal").notify(
            "Please Fill In Your Postal", {
                position: "left"
            }
        );
    } else {
        $("#postal").css('border-color', '');
        postalValidation = true;
    }

    //Validation for unit number
    if (!$('#unitNo').val()) {
        $("#unitNo").css('border-color', 'red');
        $("#unitNo").notify(
            "Please Fill In Your Unit No", {
                position: "right"
            }
        );
    } else {
        $("#unitNo").css('border-color', '');
        unitNoValidation = true;
    }

    //Validation for instagram page
    if (!$('#instagram').val()) {
        $("#instagram").css('border-color', 'red');
        $("#instagram").notify(
            "Please Fill In Your Instagram Page", {
                position: "left"
            }
        );
    } else {
        $("#instagram").css('border-color', '');
        instagramValidation = true;
    }

    //Validation for facebook page
    if (!$('#facebook').val()) {
        $("#facebook").css('border-color', 'red');
        $("#facebook").notify(
            "Please Fill In Your Facebook Page", {
                position: "right"
            }
        );
    } else {
        $("#facebook").css('border-color', '');
        facebookValidation = true;
    }

    //Validation for email
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
        passwordValidation = true;
    }

    //Validation for Confirm Password
    if (!$('#confirmPassword').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Please Fill In Your Password", {
                position: "right"
            }
        );
    } else if ($('#confirmPassword').val() != $('#password').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Password Mismatched !", {
                position: "right"
            }
        );
    } else {
        $("#confirmPassword").css('border-color', '');
        confirmPasswordValidation = true;
    }

    if (emailValidation) {
        $.ajax({
            type: "POST",
            url: "checkUniqueEmailBrand",
            data: {
                email: $('#email').val()
            },
            success: function (result) {
                if (!result.success) {
                    $("#email").css('border-color', 'red');
                    $("#email").notify(
                        "Email has been taken", {
                            position: "right",
                            autoHideDelay: 1200,
                        }
                    );
                } else {
                    $("#email").css('border-color', '');
                    uniqueEmailValidation = true;
                    //Submit the form
                    if (brandNameValidation &&
                        industryValidation &&
                        contactNoValidation &&
                        addressValidation &&
                        postalValidation &&
                        unitNoValidation &&
                        instagramValidation &&
                        facebookValidation &&
                        emailValidation &&
                        passwordValidation &&
                        confirmPasswordValidation) {
                        $.ajax({
                            type: "POST",
                            url: "brandSignUp",
                            data: {
                                brandName: $('#brandName').val(),
                                industry: $("#industry").val(),
                                contactNo: $('#contactNo').val(),
                                address: $('#address').val(),
                                postal: $('#postal').val(),
                                unitNo: $('#unitNo').val(),
                                instagram: $('#instagram').val(),
                                facebook: $('#facebook').val(),
                                email: $('#email').val(),
                                password: $('#password').val()
                            },
                            success: function (msg) {
                                alert('Success');
                                window.location = "/index-brand";
                            }
                        })
                    }
                }
            }
        })
    };

});