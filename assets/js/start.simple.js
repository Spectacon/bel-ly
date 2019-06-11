$(function() {

    var images = ['bg-1.png', 'bg-2.png', 'bg-3.png'];

    $('#container').append('<style>#container, .belly-accept-container:before, #belly-logo-container:before {background: url(../assets/img/background/' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');

    setTimeout(function() {
        $('.belly-logo-container').transition({
            scale: 1
        }, 5, 'ease');

        $('.belly-logo-container .logo').addClass('loadIn');
        $('.belly-logo-container .text').addClass('loadIn');
        $('.belly-accept-container').transition({
            height: '431.5px'
        });
        
        setTimeout(function() {
            $('.belly-accept-container').addClass('loadIn');
            setTimeout(function() {
                $('.formDiv, form h1').addClass('loadIn');
            }, 400);
        }, 400);
    }, 10);

});