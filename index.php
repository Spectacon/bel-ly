<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bel.ly - Escrow & Payment Solution</title>
    <link rel="shortcut icon" href="assets/img/belly-32.png" type="image/x-icon">
    <link rel="icon" href="assets/img/belly-32.png" type="image/x-icon">

    <link rel="stylesheet" href="assets/css/normalize.min.css">
    <link rel="stylesheet" href="assets/css/signInUp.css">
    <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/jquery.transit.js"></script>
</head>
<body>
    <div id="container">
        <div id="inviteContainer">
            <div class="logoContainer">
                <img class="logo" src="assets/img/belly-512.png" />
                <img class="text" src="assets/img/belly-text.png" />
            </div>
        </div>
    </div>

    <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
        <iframe frameborder="0" height="100%" width="100%" 
            src="https://youtube.com/embed/sxiCa2zIi18?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
    </div>

    <script type="text/javascript">
        $(function() {

        var images = ['assets/img/background/1.jpg', 'assets/img/background/2.jpg', 'assets/img/background/4.jpg', 'assets/img/background/5.jpg'];

        $('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');

        setTimeout(function() {
            $('.logoContainer').transition({
                scale: 1
            }, 700, 'ease');
            setTimeout(function() {
                $('.logoContainer .logo').addClass('loadIn');
                setTimeout(function() {
                    $('.logoContainer .text').addClass('loadIn');
                }, 500);
            }, 1000);
        }, 10);

        });
    </script>
</body>
</html>