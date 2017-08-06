/**
 * Created by Андрей on 06.08.2017.
 */
$(
    function () {
        $('#firstLink').on('click', function(event){
            //игнорирование события по умолчанию
            event.preventDefault();

            $('h1').css({
                opacity: 0,
                border: 'thin solid'
            });
            $('h2').animate({
                opacity: 0
            }, 5000)
        });

        $('#firstButton').on('click', function(event){

            $('h1').css({
                opacity: 0,
                border: 'thin solid'
            });
            $('h2').animate({
                opacity: 0
            }, 5000)
        });

        window.sr = ScrollReveal({reset: true});
        sr.reveal('.show');
    }
);