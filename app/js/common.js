$(document).ready(function () {



    // Adress and menu psevdoslider

    var menuSwich = $(".bl_eye-checkbox"),
        blockAdress = $(".bl_nav__adress"),
        blockNavigation = $(".bl_menu"),
        blockAdress_animationClass = "bl_nav__adress__animate",
        blockNavigation_aniamtionClass ="bl_menu__animate";

    menuSwich.on("click", function(){

        toggleClassAnimation(blockAdress, blockAdress_animationClass);
        toggleClassAnimation(blockNavigation, blockNavigation_aniamtionClass);

    });

    function toggleClassAnimation(block, whatClass){
        block.toggleClass(whatClass);
    }

    // decor line under navigation words
    $(".bl_menu__word").each(function(){
        var span = $.map($(this).text().split(''),function(e,i){
            return e!=' '?$('<span>',{class:'letter_decor'}).text(e).get(0).outerHTML:' ';
        });
        $(this).html(span.join(''));
    });



    //SLIDERS

    var sliderHits = $(".slider_hits"),
        sliderShares = $(".slider_shares"),
        sliderNews = $(".slider_news");

    var fullItems = $(".bl_fullSliders_item"),
        fullItemsLength = fullItems.length;
    var activeItem = "bl_fullSliders_item__active";

    fullItems.on("click", function () {

        fullItems.removeClass(activeItem);
        $(this).addClass(activeItem);

    });




    function owlSlider(slider){
        slider.owlCarousel({
            items:1,
            loop:true, //Зацикливаем слайдер
            nav:true, //Отключение навигации
            dots:false,
            margin:20,
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:4000 //Время смены слайда

        });
    }
    owlSlider(sliderHits);
    owlSlider(sliderShares);
    owlSlider(sliderNews);






    // //AJAX forms send
    // //Docs: http://api.jquery.com/jquery.ajax/
    // $("form").submit(function () {
    //     $.ajax({
    //         type: "GET",
    //         url: "mail.php",
    //         data: $("form").serialize()
    //     }).done(function () {
    //         alert("Спасибо за заявку!");
    //         setTimeout(function () {
    //             $.fancybox.close();
    //         }, 1000);
    //     });
    //     return false;
    // });

});
