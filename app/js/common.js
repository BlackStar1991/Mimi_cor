$(document).ready(function () {

    console.log("work");


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



    var sliderHits = $(".slider_hits"),
        sliderShares = $(".slider_shares"),
        sliderNews = $(".slider_news");


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
