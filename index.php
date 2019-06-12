<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bel.ly - Escrow & Payment Solution</title>
    <link rel="shortcut icon" href="assets/img/belly-32.png" type="image/x-icon">
    <link rel="icon" href="assets/img/belly-32.png" type="image/x-icon">

    <link rel="stylesheet" href="assets/css/preload.css">
    <link rel="stylesheet" href="assets/css/start.css">
    <script src="assets/js/lib/jquery-3.2.1.min.js"></script>
    <script src="assets/js/lib/jquery.transit.js"></script>
</head>
<body>
    <!-- Preload animation -->
    <div id="preloader">
        <div class="pulse"></div>
    </div>
    <!-- End of Preload animation -->
    
    <div id="container">
        <div id="belly-main-container">
            <div class="belly-logo-container">
                <img class="logo" src="assets/img/belly-512.png" />
                <img class="text" src="assets/img/belly-text.png" />
            </div>
        </div>
    </div>

    <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
        <iframe frameborder="0" height="100%" width="100%" 
            src="https://youtube.com/embed/C9lxOkqc_F8?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
    </div>

    <script type="text/javascript">
        $(function() {

        function _change() {
            var images = ['bg-1.png', 'bg-2.png', 'bg-3.png'];
            $('#container').append('<style>#container, .belly-accept-container:before, #belly-logo-container:before {background: url(assets/img/background/' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
            setTimeout(_change, 2000);
        }

        _change();

        setTimeout(function() {
            $('.belly-logo-container').transition({
                scale: 1
            }, 700, 'ease');
            setTimeout(function() {
                $('.belly-logo-container .logo').addClass('loadIn');
                setTimeout(function() {
                    $('.belly-logo-container .text').addClass('loadIn');
                }, 500);
            }, 1000);
        }, 10);

        });
    </script>
    <script src="assets/js/lib/jquery-3.2.1.min.js"></script>
    <script src="assets/js/lib/jquery.transit.js"></script>
    <script src="assets/js/preload.js"></script>
</body>
</html>