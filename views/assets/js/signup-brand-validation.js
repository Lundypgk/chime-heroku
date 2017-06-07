$("#submit").click(function () {

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
    } else if (('#confirmPassword').val() != ('#password').val()) {
        $("#confirmPassword").css('border-color', 'red');
        $("#confirmPassword").notify(
            "Password Mismatched !", {
                position: "right"
            }
        );
    } else {
        $("#confirmPassword").css('border-color', '');
    }
});