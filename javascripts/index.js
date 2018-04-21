

// ToDo: Terminar de solucionar esto
$('.activator').on('keypress' , function( event ) {

    var target = event.target;
    target.click();
    var card = target.closest('.card');
    var cardReveal = card.querySelector('.card-reveal');
    var cardTitle = cardReveal.querySelector('.card-title');
    cardTitle.focus();

});


$('.card-reveal').find('.card-title').on('keypress', function ( event ) {

    var target = event.target;
    target.click();
    var card = target.closest('.card');
    var cardContent = card.querySelector('.card-content');
    var cardTitle = cardContent.querySelector('.card-title');
    cardTitle.focus();

});