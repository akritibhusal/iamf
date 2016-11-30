$(document).ready(function(){

 
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
    $('.top-nav').toggleClass('top-show');
	});

  $(".method").click(function() {
      $('html,body').animate({
          scrollTop: $(".method-content").offset().top-160},
          1000);
  });
  $(".team").click(function() {
      $('html,body').animate({
          scrollTop: $(".team-content").offset().top-160},
          1000);
  });
  $(".advisor").click(function() {
      $('html,body').animate({
          scrollTop: $(".advisor-content").offset().top-160},
          1000);
  });


});
particlesJS('particles-js',
  {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 1
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
      "onresize": {
        "enable": true,
        "density_auto": true,
        "density_area": 500
      },
            "onhover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "size": 7,
                "duration": 5,
                "opacity": 1,
                "speed": 10
            }
        }
    },
"retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

$(".show-div").click(function() {
    $('html,body').animate({
        scrollTop: $(".intro").offset().top},
        'slow');
});
