$(function() {
    var images = ['../assets/img/background/1.jpg', '../assets/img/background/2.jpg', '../assets/img/background/3.jpg', '../assets/img/background/4.jpg', '../assets/img/background/5.jpg'];

    $('#container').append('<style>#container {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
});