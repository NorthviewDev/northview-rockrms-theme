$((function(){$(".rock-text-box input.form-control").each((function(){$(this).is(":focus")?$(this).closest(".form-group").addClass("focused"):""===$(this).val()&&$(this).closest(".form-group").addClass("blurred")})),$(".rock-text-box input.form-control").on("focus",(function(){$(this).closest(".form-group").removeClass("blurred"),$(this).closest(".form-group").addClass("focused")})),$(".rock-text-box input.form-control").on("blur",(function(){""===$(this).val()&&($(this).closest(".form-group").addClass("blurred"),$(this).closest(".form-group").removeClass("focused"))})),$('.address-control .form-control[type="text"]:not(.js-street1)').each((function(){$(this).closest(".form-group").prepend("<label class='control-label' for='"+$(this).attr("id")+"'>"+$(this).attr("placeholder")+"</label>"),$(this).wrap("<div class='control-wrapper'></div>").attr("placeholder",""),$(this).closest(".form-group").addClass("blurred")})),$('.address-control .form-control[type="text"]').on("focus",(function(){$(this).closest(".form-group").removeClass("blurred"),$(this).closest(".form-group").addClass("focused")})),$('.address-control .form-control[type="text"]').on("blur",(function(){""===$(this).val()&&($(this).closest(".form-group").addClass("blurred"),$(this).closest(".form-group").removeClass("focused"))}));var o=!1,e=document.querySelector(".nav-toggle-menu"),t=document.querySelector(".c-primary-nav");function r(o,e,t){var r=document.createElement("span");r.classList.add("ornamental");for(i=0;i<t;i++)s=i,c=void 0,(c=document.createElement("i")).classList.add("nv-icon"),c.classList.add("wow"),c.classList.add("fadeIn"),c.setAttribute("data-wow-duration","5ms"),c.setAttribute("data-wow-delay",30*s+"ms"),c.classList.add(e),r.appendChild(c);var s,c;o.appendChild(r)}function s(){var o=document.querySelectorAll(".c-block-hero__background-video"),e=o.length,t=0;e>1&&function o(e,t,r){t&&(e(),setTimeout(()=>{o(e,t-1,r)},r))}((function(){o[t++].firstElementChild.play()}),e,600)}e.addEventListener("click",(function(r){r.preventDefault(),!1===o?(o=!0,t.classList.add("c-primary-nav--is-active"),e.classList.add("nav-toggle-menu--is-active")):(o=!1,t.classList.remove("c-primary-nav--is-active"),e.classList.remove("nav-toggle-menu--is-active"))})),function(){var o=document.querySelector(".c-locations-times__list div");o&&r(o,"nv-icon--ornament_backslash",15);var e=document.querySelector(".c-block-hero__background-video");e&&r(e,"nv-icon--ornament_backslash",15);var t=document.querySelector(".c-block-hero__headline"),s=document.querySelector(".c-block-hero__subhead");s?r(s,"nv-icon--ornament_backslash",25):r(t,"nv-icon--ornament_backslash",15);var c=document.querySelector(".c-block-hero__container");c&&r(c,"nv-icon--ornament_plus",3),document.querySelectorAll(".c-card--title-highlight").forEach(o=>{r(o,"nv-icon--ornament_backslash",35)}),document.querySelectorAll(".c-card.decorated").forEach(o=>{r(o,"nv-icon--ornament_minus",8)})}(),window.onload=function(){s()},$('[data-toggle="popover"]').popover({container:"body",html:"true"}),(new WOW).init()}));