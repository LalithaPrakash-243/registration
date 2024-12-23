$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("body").html(response); // Display response
            },
            error: function () {
                alert("Error submitting form.");
            }
        });
    });
});
