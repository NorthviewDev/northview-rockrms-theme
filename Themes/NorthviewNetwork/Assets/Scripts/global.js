//Global Scripts
$(function () {
  //document.ready

  /*** calculate header height for fixed position and content margin ***/
  let fixedHeader = document.getElementById('site-header');
  let siteBody = document.getElementById('zone-feature');
  fixedHeader.style.position = 'fixed';
  siteBody.style.paddingTop = fixedHeader.offsetHeight + 'px';

  $('.rock-text-box input.form-control').each(function () {
    if ($(this).is(':focus')) {
      $(this).closest('.form-group').addClass('focused');
    } else if ($(this).val() === '') {
      $(this).closest('.form-group').addClass('blurred');
    }
  });
  $('.rock-text-box input.form-control').on('focus', function () {
    $(this).closest('.form-group').removeClass('blurred');
    $(this).closest('.form-group').addClass('focused');
  });
  $('.rock-text-box input.form-control').on('blur', function () {
    if ($(this).val() === '') {
      $(this).closest('.form-group').addClass('blurred');
      $(this).closest('.form-group').removeClass('focused');
    }
  });

  $('.address-control .form-control[type="text"]:not(.js-street1)').each(function () {
    $(this)
      .closest('.form-group')
      .prepend("<label class='control-label' for='" + $(this).attr('id') + "'>" + $(this).attr('placeholder') + '</label>');
    $(this).wrap("<div class='control-wrapper'></div>").attr('placeholder', '');
    $(this).closest('.form-group').addClass('blurred');
  });
  $('.address-control .form-control[type="text"]').on('focus', function () {
    $(this).closest('.form-group').removeClass('blurred');
    $(this).closest('.form-group').addClass('focused');
  });
  $('.address-control .form-control[type="text"]').on('blur', function () {
    if ($(this).val() === '') {
      $(this).closest('.form-group').addClass('blurred');
      $(this).closest('.form-group').removeClass('focused');
    }
  });

  var navActive = false,
    navOpen = document.querySelectorAll('.nav-toggle-menu'),
    navListOpen = document.querySelector('.c-offcanvas-menu');

  navOpen.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      if (navActive === false) {
        navActive = true;
        navListOpen.classList.add('c-offcanvas-menu--is-active');
        navOpen.forEach(function (item) {
          item.classList.add('nav-toggle-menu--is-active');
        });
      } else {
        navActive = false;
        navListOpen.classList.remove('c-offcanvas-menu--is-active');
        navOpen.forEach(function (item) {
          item.classList.remove('nav-toggle-menu--is-active');
        });
      }
    });
  });
  // Function to execute X function, Y number of times with Z of interval delay
  function recursiveDelay(functionToCall, executionsNumber, timeoutInMilliseconds) {
    if (executionsNumber) {
      //exit condition

      functionToCall(); // external function execution

      setTimeout(() => {
        recursiveDelay(functionToCall, executionsNumber - 1, timeoutInMilliseconds); //recursive call
      }, timeoutInMilliseconds);
    }
  }
  //set class on fixed header after scrolling
  var didScroll = true;
  var lastScrollTop = 0;
  var delta = 5;

  $(window).scroll(function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > 10) {
      $('header').addClass('opaque');
    } else {
      $('header').removeClass('opaque');
    }

    lastScrollTop = st;
  }
  function playHeroVideos() {
    var heroVideos = document.querySelectorAll('.c-block-hero__background-video');
    var numVids = heroVideos.length;
    var n = 0;

    // play [n]th video and increment [n]
    let playVideo = function () {
      //console.log(heroVideos[loop]);
      heroVideos[n++].firstElementChild.play();
    };

    // Initial call
    if (numVids > 1) {
      recursiveDelay(playVideo, numVids, 600);
    }
  }
  //addSlashes();
  window.onload = function () {
    playHeroVideos();
  };

  $('[data-toggle="popover"]').popover({
    container: 'body',
    html: 'true',
  });
  new WOW().init();
  //cssVars();

  //console.log(window.innerWidth)
});
