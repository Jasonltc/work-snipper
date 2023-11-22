// Mobile
/* swiper on satellite univers pages */
    if ($("#timeline .swiper-slide").length > 0) {
        timelineSwiper = new Swiper("#timeline", {
            slidesPerView: 1.443,
        });
    }

    if ($("#banner-swiper .swiper-slide").length > 0) {
        selection = new Swiper("#banner-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            paginationClickable: true,
            pagination: '.swiper-pagination',
        });
    }

    $(".swiper-btn").on("click", function () {
        if ($("#our_selection .swiper-slide").length > 0) {
            setTimeout(function () {
                ourSelection = new Swiper("#our_selection", {
                    slidesPerView: 1.3,
                    spaceBetween: 15,
                    centeredSlides: true,
                    paginationClickable: true,
                    pagination: '.swiper-pagination',
                });
            }, 200);
        }
    });

    /* add scroll os */
    if ($('.text-wrapper.company-information-wrapper').length) {
        setTimeout(function () {
            $(".company-info-block").overlayScrollbars({});
        }, 250);
    }

    /* switch function on satellite univers pages */
    $("select#category").on('change', function () {
        let selectElement = $(this).find('option:selected');
        let btnVal = selectElement.attr("data-filter");

        $(".switch-slider").each(function () {
            let getFilterName = $(this).attr("data-filter");
            if (btnVal == getFilterName) {
                /* Removed active from all that are not identical */
                $(".switch-slider").removeClass("active");
                /* Add Class active to the switch-slider that have the same data filter as the switch-btn */
                $(this).addClass("active");
            }
        });
    });

    /* switch on satellite univers pages */
    $(".btn-switch").each(function () {
        $(this).on("click touch tap", function () {
            /* Check if switch-btn instances has active class */
            if (!$(this).hasClass("active")) {
                /* Remove all active class on all switch button */
                $(".btn-switch").removeClass("active");
                /* Add class active only on clicked button */
                $(this).addClass("active");

                /* Get the value of data-filter for each instances of switch-btn */
                let getBlocName = $(this).attr("data-filter");

                /* Select each instances of switch-slider */
                $(".switch-slider").each(function () {
                    /* Get the value of data-filter for each instances of switch-slider */
                    let getFilterName = $(this).attr("data-filter");

                    /* Check if the data-filter is identical */
                    if (getBlocName == getFilterName) {
                        /* Removed active from all that are not identical */
                        $(".switch-slider").removeClass("active");
                        /* Add Class active to the switch-slider that have the same data filter as the switch-btn */
                        $(this).addClass("active");
                    }
                });
            }
        });
    });

    /* header banner to transparent on satellite univers pages */
    if ($(".satellite-page").length > 0) {
        $("body").addClass('universe-pages');
    }

    $(".interactive-part").each(function () {
        $(this).on("click touch tap", function () {
            let getTiggerPartName = $(this).attr("data-name");
            let topElement =  $("." + getTiggerPartName).offset().top - 220 ;
            $("html").css("scroll-behavior", "smooth");
            $(window).scrollTop(topElement);
            $('.expandable').removeClass('open'); 
            $('.accordion-trigger').removeClass('open'); 

            $(".block").each(function () {
                let getPartName = $(this).attr("data-name");
                if (getPartName == getTiggerPartName) {
                    $(this).find('.expandable').addClass('open'); 
                    $(this).find('.accordion-trigger').addClass('open'); 
                }
            })
        });
    });

    /* accordion function on satellite univers pages */
    $(".accordion-trigger").each(function () {
        $(this).on("click touch tap", function () {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).next().removeClass("open");
                $(this).parent().removeClass('overlay-active');
            } else {
                $(".accordion-trigger").removeClass("open");
                $(".accordion-trigger").parent().removeClass('overlay-active');
                $(".expandable").removeClass("open");
                $(this).addClass("open");
                $(this).next().addClass("open");
                $(this).parent().addClass('overlay-active');
            }
        });
    });
});

// Desktop
if ($("body .satellite-page").length > 0) {
        $("body").addClass('universe-pages');

        $(window).on('load scroll', function () {
            const $topWrapper = $("#site_head_wrap");
            const scrollPosition = $(window).scrollTop();

            if (scrollPosition <= 20) {
                $topWrapper.addClass("scroll_bg_transparent");
            } else {
                $topWrapper.removeClass("scroll_bg_transparent");
            }
        });
    }

    /* switch on satellite univers pages */
    $(".switch-btn").each(function () {
        $(this).on("click touch tap", function () {
            /* Check if switch-btn instances has active class */
            if (!$(this).hasClass("active")) {
                /* Remove all active class on all switch button */
                $(".switch-btn").removeClass("active");
                /* Add class active only on clicked button */
                $(this).addClass("active");

                /* Get the value of data-filter for each instances of switch-btn */
                var getBlocName = $(this).attr("data-filter");

                /* Select each instances of switch-slider */
                $(".switch-slider").each(function () {
                    /* Get the value of data-filter for each instances of switch-slider */
                    var getFilterName = $(this).attr("data-filter");

                    /* Check if the data-filter is identical */
                    if (getBlocName == getFilterName) {
                        /* Removed active from all that are not identical */
                        $(".switch-slider").removeClass("active");
                        /* Add Class active to the switch-slider that have the same data filter as the switch-btn */
                        $(this).addClass("active");
                    }
                });
            }
        });
    });

    /* interaction on the shoe svg */ 
    function handleInteraction(animation) {
        var getTiggerPartName = animation.attr("data-name");
        $(".interactive-btn, .non-active-state").removeClass('active');
        animation.addClass('active');
    
        $(".shoe-sec").each(function () {
            var getShoePart = $(this).attr("data-name");
            if (getTiggerPartName == getShoePart) {
                $(".shoe-sec").removeClass("show");
                $(this).addClass("show");
            }
        });
    
        $(".non-active-state").each(function () {
            var getShadePart = $(this).attr("data-name");
            if (getTiggerPartName == getShadePart) {
                $(".non-active-state").removeClass("active");
                $('[data-name=' + getShadePart + ']').addClass('active');
            }
        });
    }

    function removeHandleInteraction() {
        $(".interactive-btn, .non-active-state").removeClass('active');
        $(".shoe-sec").removeClass("show");
    }
    
    $(".interactive-btn").each(function () {
        $(this).hover(function () {
            handleInteraction($(this));
        }, function() {
            removeHandleInteraction()
        });
    });
    
    $(".non-active-state").each(function () {
        $(this).hover(function () {
            handleInteraction($(this));
        },function() {
            removeHandleInteraction()
        });
    });

    function fadeInShowClass(scrollBarPosition) {
        if (window.pageYOffset >= scrollBarPosition ) {
            $('.svg-box').addClass('fadeInShow')
        }else {
            $('.svg-box').removeClass('fadeInShow')
        }
    }

    if($('.satellite_conseils_entretien')){
        window.addEventListener('scroll', function() {
            if(window.innerWidth >= 1024 && window.innerWidth <= 1400) {
                fadeInShowClass(650);
            }else if (window.innerWidth > 1400 && window.innerWidth <= 1600) {
                fadeInShowClass(850);
            }else if (window.innerWidth > 1600) {
                fadeInShowClass(1000);
            }
        });
    }
