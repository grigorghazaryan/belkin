$(document).ready(function () {
    $("#form").validate({
        rules: {
            "firstName": {
                required: true,
                minlength: 3
            },
            "lastName": {
                required: true,
                minlength: 3
            },
            "email": {
                required: true,
                email: true
            },
            "company": {
                required: true,
                minlength: 3
            },
            "question": {
                required: true,
                minlength: 3
            },
        },
        messages: {
            "email": {
                required: "Please, enter an email",
                email: "Email is invalid"
            }
        }
    });
});