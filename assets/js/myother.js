// Menu
// $('#nav-menu').on('click', function(){
//     $('.nav-list-item-container').toggle();
// })
$('#nav-menu').on('click', function() {
    console.log('clicked');
    $('.slide-in').toggleClass('show');
    $('#about_me').toggleClass('low-index');
    $('#projects').toggleClass('low-index');
  });