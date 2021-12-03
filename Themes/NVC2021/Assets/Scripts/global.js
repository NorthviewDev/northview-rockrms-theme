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

  //hero scripts
  // function addOrnamentalElem(appendObject, appendIconClass, numIcons) {
  //   // create a new element
  //   var newSpan = document.createElement("span");
  //   // add the text node to the newly created div
  //   newSpan.classList.add("ornamental");
  //   // External function to call
  //   let appendIcon = function (j) {
  //     var newIcon = document.createElement("i");
  //     newIcon.classList.add("nv-icon");
  //     newIcon.classList.add("wow");
  //     newIcon.classList.add("fadeIn");
  //     newIcon.setAttribute('data-wow-duration', "5ms")
  //     newIcon.setAttribute('data-wow-delay', ((30 * j)) + "ms")
  //     newIcon.classList.add(appendIconClass);
  //     newSpan.appendChild(newIcon);
  //   }
  //   for (i = 0; i < numIcons; i++) {
  //     appendIcon(i);
  //   }
  //   // add the newly created element and its content into the DOM
  //   appendObject.appendChild(newSpan);
  // }
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

  /*
  
  function addSlashes() {
    var ltHeadline = document.querySelector('.c-locations-times__list div');
    if (ltHeadline) addOrnamentalElem(ltHeadline, "nv-icon--ornament_backslash", 15);
    var heroVideo = document.querySelector('.c-block-hero__background-video');
    if (heroVideo) addOrnamentalElem(heroVideo, "nv-icon--ornament_backslash", 15);
    //var heroHeadline = document.querySelector('.c-block-hero__headline');
    //var heroSubHeadline = document.querySelector('.c-block-hero__subhead');
    //if (heroSubHeadline) {
      //addOrnamentalElem(heroSubHeadline, "nv-icon--ornament_backslash", 25);
   	//} else {
      //addOrnamentalElem(heroHeadline, "nv-icon--ornament_backslash", 15);
    //}
    //var heroContainer = document.querySelector('.c-block-hero__container');
    //if (heroContainer) addOrnamentalElem(heroContainer, "nv-icon--ornament_plus", 3);
    var calloutPrimary = document.querySelectorAll('.c-card--title-highlight');
    calloutPrimary.forEach(item => {
      addOrnamentalElem(item, "nv-icon--ornament_backslash", 35)
    });
    var cardOrnamental = document.querySelectorAll('.c-card.decorated');
    cardOrnamental.forEach(item => {
      addOrnamentalElem(item, "nv-icon--ornament_minus", 8)
    });
  }


    function randPercentRange(range){
      return Math.floor(Math.random() * (range[1]-range[0])) + range[0] + '%';
    }
    function addOrnament(appendObject,appendIconClass,rangeTop,rangeLeft) {      
      // create a new element 
      var newSpan = document.createElement("span");
      // add the text node to the newly created div
      newSpan.classList.add("ornament");  
      // add the newly created element and its content into the DOM 
      appendObject.appendChild(newSpan);
      var newIcon = document.createElement("i");
      newIcon.classList.add("nv-icon");
      newIcon.classList.add("wow");
      newIcon.classList.add("fadeIn");
      newIcon.classList.add(appendIconClass);
      newSpan.style.top = randPercentRange(rangeTop);
      newSpan.style.left = randPercentRange(rangeLeft);
      newSpan.appendChild(newIcon);
    }
    $('.has-ornaments').each(function(){
      var hasOrnaments = this;
      if (window.innerWidth < 768) {
        rangeTop = [5,45]; rangeLeft = [5,45];
        addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
        rangeTop = [5,45]; rangeLeft = [55,95];
        addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
        rangeTop = [55,95]; rangeLeft = [5,45];
        addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
        rangeTop = [55,95]; rangeLeft = [55,95];
        addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      } else {
        rangeTop = [5,33]; rangeLeft = [5,33];
        addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
        rangeTop = [5,33]; rangeLeft = [34,66];
        addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
        rangeTop = [5,33]; rangeLeft = [67,95];
        addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
        rangeTop = [34,66]; rangeLeft = [5,33];
        addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
        rangeTop = [34,66]; rangeLeft = [34,66];
        addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
        rangeTop = [34,66]; rangeLeft = [67,95];
        addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
        rangeTop = [67,95]; rangeLeft = [5,33];
        addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
        rangeTop = [67,95]; rangeLeft = [34,66];
        addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
        rangeTop = [67,95]; rangeLeft = [67,95];
        addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);        
      }
    });
  */

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
