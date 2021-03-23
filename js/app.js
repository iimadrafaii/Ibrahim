let ilsrafColor;
$(function() {
    'use strict';
    $(".burger").click(function() {
        $(".ilsraf-nav-list").toggleClass('open');
        document.querySelector("body").classList.toggle('body-scroll');
        $(".line1").toggleClass('change');
        $(".line2").toggleClass('change');
        $(".line3").toggleClass('change');
    });
    $(window).on('scroll', (function() {
        if ($(window).scrollTop()) {
            $('.ilsraf-nav').addClass('active');
        } else {
            $('.ilsraf-nav').removeClass('active');
        }
        var x = document.getElementById('MASTER').offsetHeight;
        var scrollNav = $(window).scrollTop();
        if (scrollNav > x - 400) {
            $('.scrol-tostart').addClass("active");
            $('.scroll-nav').addClass("active");
        } else {
            $('.scrol-tostart').removeClass("active");
            $('.scroll-nav').removeClass("active");
        }
    }));
    var NavLinks = document.querySelectorAll(".scrol-to");
    $(NavLinks).click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('section')).offset().top
        }, 1000);
    });
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 600) {
                $('.scroll-nav  a').removeClass('active');
                $('.scroll-nav  a').eq(i).addClass('active');
            }
        });
    }).scroll();
    $('.serv').hover(function() {
        $(this).addClass('animate__animated animate__jello');
    }, function() {
        $(this).removeClass('animate__animated animate__jello');
    });
    $('.why-element').hover(function() {
        $(this).addClass('animate__animated animate__headShake');
    }, function() {
        $(this).removeClass('animate__animated animate__headShake');
    });

    var $ti = $('#headLine1')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('#headLine1').addClass('active');
        } else {
            $('#headLine1').removeClass('active');

        }
    }, { offset: '79%' });
    var $ti = $('#headLine2')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('#headLine2').addClass('active');
        } else {
            $('#headLine2').removeClass('active');

        }
    }, { offset: '79%' });
    var $ti = $('#headLine3')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('#headLine3').addClass('active');
        } else {
            $('#headLine3').removeClass('active');

        }
    }, { offset: '79%' });
    var $ti = $('#headLine4')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('#headLine4').addClass('active');
        } else {
            $('#headLine4').removeClass('active');

        }
    }, { offset: '79%' });
    var $ti = $('#headLine5')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('#headLine5').addClass('active');
        } else {
            $('#headLine5').removeClass('active');

        }
    }, { offset: '79%' });
    var $ti = $('.meft1')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.meft1').addClass('active');
        } else {
            $('.meft1').removeClass('active');

        }
    }, { offset: '95%' });
    var $ti = $('.meft2')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.meft2').addClass('active');
        } else {
            $('.meft2').removeClass('active');

        }
    }, { offset: '95%' });
    var $ti = $('.meft3')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.meft3').addClass('active');
        } else {
            $('.meft3').removeClass('active');

        }
    }, { offset: '95%' });
    var $ti = $('.progress1')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.progress1').addClass('active');
        } else {
            $('.progress1').removeClass('active');

        }
    }, { offset: '95%' });
    var $ti = $('.progress2')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.progress2').addClass('active');
        } else {
            $('.progress2').removeClass('active');

        }
    }, { offset: '95%' });
    var $ti = $('.progress3')
    $ti.waypoint(function(direction) {
        if (direction == 'down') {
            $('.progress3').addClass('active');
        } else {
            $('.progress3').removeClass('active');

        }
    }, { offset: '95%' });

    let mainColors = localStorage.getItem("P-Color");
    let hoverColors = localStorage.getItem("S-Color");
    if (mainColors !== null) {
        document.documentElement.style.setProperty('--P-color', mainColors);
        document.documentElement.style.setProperty('--S-color', hoverColors);
        document.querySelectorAll(".colors-list li").forEach(element => {
            element.classList.remove("active");
            if (element.dataset.colors === mainColors) {
                element.classList.add('active');
            }
        });
    }
    const colorsLi = document.querySelectorAll(".colors-list li");
    colorsLi.forEach(li => {
        li.addEventListener("click", (e) => {
            document.documentElement.style.setProperty('--P-color', e.target.dataset.colors);
            document.documentElement.style.setProperty('--S-color', e.target.dataset.bg);
            localStorage.setItem("P-Color", e.target.dataset.colors);
            localStorage.setItem("S-Color", e.target.dataset.bg);
            e.target.parentElement.querySelectorAll(".active").forEach(element => {
                element.classList.remove("active");
            });
            e.target.classList.add("active");
            let ilyes = {
                particles: {
                    number: { value: 4, density: { enable: true, value_area: 800 } },
                    color: { value: "FD0054" },
                    shape: {
                        type: "circle",
                        stroke: { width: 0, color: "959EA3" },
                        polygon: { nb_sides: 6 },
                        image: { src: "img/github.svg", width: 100, height: 100 }
                    },
                    opacity: {
                        value: 0.41646062821684559,
                        random: true,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                        value: 32.06824121731046,
                        random: true,
                        anim: { enable: true, speed: 0, size_min: 40, sync: false }
                    },
                    line_linked: {
                        enable: false,
                        distance: 200,
                        color: "#ffffff",
                        opacity: 1,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 8,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: false, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 30 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            };
            ilyes.particles.color.value = localStorage.getItem("P-Color");
            particlesJS("particles-js", ilyes);
        });
    });
    document.querySelector(".myiconsetting").onclick = function() {
        this.classList.toggle('fa-spin');
        document.querySelector(".setting-box ").classList.toggle('active');
        $("#option-modal").removeClass("active");
    };
    let ilyes = {
        particles: {
            number: { value: 4, density: { enable: true, value_area: 800 } },
            color: { value: "FD0054" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "959EA3" },
                polygon: { nb_sides: 6 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.41646062821684559,
                random: true,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 32.06824121731046,
                random: true,
                anim: { enable: true, speed: 0, size_min: 40, sync: false }
            },
            line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2
            },
            move: {
                enable: true,
                speed: 8,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: false, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 30 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    };
    let newColor = localStorage.getItem("P-Color");
    if (newColor == null) {
        newColor = "#00ff00";
    }
    ilyes.particles.color.value = newColor;
    particlesJS("particles-js", ilyes);
});