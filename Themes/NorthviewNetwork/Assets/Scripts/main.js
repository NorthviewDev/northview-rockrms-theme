/*** calculate header height for fixed position and content margin ***/
function header_init() {
  let fixedHeader = document.getElementById('site-header');
  let siteBody = document.getElementById('zone-feature');
  fixedHeader.style.position = 'fixed';
  siteBody.style.paddingTop = fixedHeader.offsetHeight + 'px';
}
/*** GSAP ***/
let art = gsap.utils.toArray('.js-scroll-full .art');
art.forEach((art) => {
  gsap.fromTo(
    art,
    {
      x: '50%', //from
    },
    {
      x: '-50%', //to
      scrollTrigger: {
        id: art.innerText,
        trigger: art,
        scrub: true,
        // markers: true
      },
    }
  );
});

let swiperltr = gsap.utils.toArray('.js-ltr');
swiperltr.forEach((swiper) => {
  gsap.from(swiper, {
    x: '100%',
    scrollTrigger: {
      trigger: swiper,
      scrub: 1,
      //markers: true,
      start: 'top bottom',
      end: 'top center',
    },
  });
});

let swiperrtl = gsap.utils.toArray('.js-rtl');
swiperrtl.forEach((swiper) => {
  gsap.from(swiper, {
    x: '-100%',
    scrollTrigger: {
      trigger: swiper,
      scrub: 1,
      //markers: true,
      start: 'top bottom',
      end: 'top center',
    },
  });
});

let marquee = gsap.utils.toArray('.js-marquee');
marquee.forEach((marquee) => {
  gsap.fromTo(
    marquee,
    {
      x: '100%',
      y: '-50%',
    },
    {
      x: '0',
      y: '-50%',
      scrollTrigger: {
        trigger: marquee,
        scrub: 1,
        //markers: true,
        start: 'top bottom',
        end: 'top 20%',
      },
    }
  );
});

var viewPortWidth = window.innerWidth;
if (viewPortWidth >= 720) {
  let jsp = gsap.utils.toArray('.js-parallax');
  jsp.forEach((jsp) => {
    gsap.to(jsp, {
      paddingBottom: '0',
      scrollTrigger: {
        id: jsp.id,
        trigger: jsp,
        scrub: true,
        // markers: true
      },
    });
  });

  let jspcodd = gsap.utils.toArray('.js-parallax > .wrapper > .item:nth-child(even)');
  jspcodd.forEach((jspcodd) => {
    gsap.fromTo(
      jspcodd,
      {
        y: '30%', //from
      },
      {
        y: '-30%', //to
        scrollTrigger: {
          id: jspcodd.key,
          trigger: jspcodd,
          scrub: true,
          // markers: true
        },
      }
    );
  });

  let jspceven = gsap.utils.toArray('.js-parallax > .wrapper > .item:nth-child(odd)');
  jspceven.forEach((jspceven) => {
    gsap.fromTo(
      jspceven,
      {
        y: '45%', //from
      },
      {
        y: '-45%', //to
        scrollTrigger: {
          id: jspceven.key,
          trigger: jspceven,
          scrub: true,
          // markers: true
        },
      }
    );
  });

  let cards = gsap.utils.toArray('#card-swiper .swiper-slide:nth-child(even)');
  cards.forEach((item) => {
    gsap.fromTo(
      item,
      {
        y: '-70px', //from
      },
      {
        y: '70px', //to
        scrollTrigger: {
          id: item.id,
          trigger: item,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          //markers: true,
        },
      }
    );
  });
}

let cta = gsap.utils.toArray('.js-expand');
cta.forEach((cta) => {
  let wrapper = gsap.utils.toArray('.wrapper', cta);
  gsap.to(wrapper, {
    maxWidth: '100%',
    paddingTop: '150px',
    paddingBottom: '150px',
    scrollTrigger: {
      id: cta.id,
      trigger: cta,
      start: 'top bottom',
      end: 'top 20%',
      scrub: true,
      //markers: true
    },
  });
});

let sxsodd = gsap.utils.toArray('.js-tomiddle > :nth-child(odd) > .wrapper');
sxsodd.forEach((sxs) => {
  let intro = gsap.utils.toArray('.intro', sxs);
  let content = gsap.utils.toArray('.content', sxs);
  gsap.from(intro, {
    x: '-30%',
    scrollTrigger: {
      id: sxs.id,
      trigger: sxs,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      // markers: true
    },
  });
  gsap.from(content, {
    x: '30%',
    scrollTrigger: {
      id: sxs.id,
      trigger: sxs,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      // markers: true
    },
  });
});

let sxseven = gsap.utils.toArray('.js-tomiddle > :nth-child(even) > .wrapper');
sxseven.forEach((sxs) => {
  let intro = gsap.utils.toArray('.intro', sxs);
  let content = gsap.utils.toArray('.content', sxs);
  gsap.from(intro, {
    x: '30%',
    scrollTrigger: {
      id: sxs.id,
      trigger: sxs,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      // markers: true
    },
  });
  gsap.from(content, {
    x: '-30%',
    scrollTrigger: {
      id: sxs.id,
      trigger: sxs,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      // markers: true
    },
  });
});

let jsfade = gsap.utils.toArray('.js-fadeIn-group');
jsfade.forEach((jsfade) => {
  let card = gsap.utils.toArray('.js-fadeIn', jsfade);
  gsap.fromTo(
    card,
    {
      opacity: 0,
      visibility: 'hidden',
    },
    {
      opacity: 1,
      visibility: 'visible',
      stagger: 0.2,
      scrollTrigger: {
        id: jsfade.key,
        trigger: jsfade,
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
        // markers: true
      },
    }
  );
});

// initiate search if entered
$('#GlobalSearch button').on('click', function (e) {
  var value = $('#GlobalSearch input').val();
  e.preventDefault();
  submitSearchSite(value);
});

// initiate search if entered
$('#GlobalSearch input').on('keydown', function (e) {
  var value = $(this).val();
  if (e.keyCode == 13) {
    e.preventDefault();
    submitSearchSite(value);
  }
});
function submitSearchSite(val) {
  window.location = '/search?q=' + val;
}

// notification banner
function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

var cname = 'NotificationBar';

if (getCookie(cname) != 'hide' && $('#notificationbar').length) {
  $('#notificationbar').slideDown(200, function () {
    header_init();
  });
}

if (!$('#notificationbar').length) {
  cvalue = null;
  exdays = -1;
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; SameSite Secure; ' + expires;
}
$('#notificationbar .closer').on('click', function (e) {
  e.preventDefault();
  //Cookies.set('EmergencyNotification', 'hide');
  cvalue = 'hide';
  exdays = 1;
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + "; SameSite Secure; path='/'; " + expires;
  $('#notificationbar').slideUp(200, function () {
    header_init();
  });
});

header_init();
