$(document).ready(function () {
    // isotope
    let $btns = $(".project-area .button-group button");
    $btns.click(function (e) {
        $(".project-area .button-group button").removeClass("active");

        
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector,
        });
        return false;

        
    });

   
    if (screen.width > 768) {
        $(".project-area .button-group #btn1").trigger("click");
    }
    else{
        $(".project-area .button-group #btn2").trigger("click");
    }
    
    // $('.project-area .grid .test-popup-link').magnificPopup({
    // 	type: 'image',
    // 	gallery: { enabled: true }
    // });

    // header color change
    $(window).on("scroll", function () {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 80) {
            $header.addClass("header--colored");
        } else {
            $header.removeClass("header--colored");
        }
    });

    // wow plugin initialize
    if (screen.width > 768) {
        new WOW().init();
    }

    //top
    $("#top").click(function () {
        jQuery("html,body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#top").fadeIn("fast");
        } else {
            $("#top").stop().fadeOut("fast");
        }
        return false;
    });

    // stellar plugin initialize
    if (screen.width > 768) {
        $(window).stellar();
    }

    // skrollr plugin
    // var s = skrollr.init();

    // fancybox plugin options
    $("[data-fancybox]").fancybox({
        loop: true,
    });

    $("#dassi").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/dassi",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
    $("#juksy").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/juksy/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
    $("#sweetme").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/sweetme/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
    $("#fullPageWeb").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/fullPageWeb/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
    $("#print").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/print/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
    $("#yellow-studio").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/yellow-studio/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#form-animation").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/form-animation",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#camera").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/camera--animation/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#shopping-list").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/jquery-json-shopping-list",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#vue-js-piano").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/piano-vue.js",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#event-trigger").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/piano-vue.js",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#feedback-send-mailr").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/feedback-send-mail",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });

    $("#cutover-phone").on("click", function () {
        $.fancybox.open({
            src: "https://hardy0529.github.io/jquery--cutover-phone/",
            type: "iframe",
            opts: {
                afterShow: function (instance, current) {
                    console.info("done!");
                },
            },
        });
    });
});

