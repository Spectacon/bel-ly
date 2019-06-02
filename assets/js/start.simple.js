$(function() {

    var images = ['bg-1.png', 'bg-2.png', 'bg-3.png'];

    $('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before {background: url(../assets/img/background/' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');

    setTimeout(function() {
        $('.logoContainer').transition({
            scale: 1
        }, 5, 'ease');

        $('.logoContainer .logo').addClass('loadIn');
        $('.logoContainer .text').addClass('loadIn');
        $('.acceptContainer').transition({
            height: '431.5px'
        });
        
        setTimeout(function() {
            $('.acceptContainer').addClass('loadIn');
            setTimeout(function() {
                $('.formDiv, form h1').addClass('loadIn');
            }, 400);
        }, 400);
    }, 10);

});