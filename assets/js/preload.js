// Display loading animation while page loads
$(window).on("load", function (e) {
    // Animate loader off screen
    $("#preloader").delay(100).fadeOut("slow");
});