$(document).ready(function(){function o(o){var i=e();t.offset().top>$(window).scrollTop()&&"mobile"!=i?$("body,html").animate({scrollTop:t.offset().top},100,function(){n(o,!0)}):t.offset().top+t.height()<$(window).scrollTop()+$(window).height()&&"mobile"!=i?$("body,html").animate({scrollTop:t.offset().top+t.height()-$(window).height()},100,function(){n(o,!0)}):n(o,!0)}function n(o,n){if(n){i.find(".job-fold-content").load(o+" #jobDescription",function(o){setTimeout(function(){$("body").addClass("overflow-hidden"),i.addClass("is-open"),l.addClass("fold-is-open")},100)})}else{var t=e();i.removeClass("is-open"),l.removeClass("fold-is-open"),"mobile"==t||$(".no-csstransitions").length>0?$("body").removeClass("overflow-hidden"):l.find(".job-item").eq(0).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden"),l.find(".job-item").eq(0).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")})}}function e(){return window.getComputedStyle(document.querySelector(".job-main"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"")}console.log("Ready"),$(".nav-toggle").click(function(o){o.preventDefault(),$("body").toggleClass("nav-open")});var t=$(".job-gallery"),i=$(".job-folding-panel"),l=$(".job-main");t.on("click","a",function(n){n.preventDefault(),o($(this).attr("href")),console.log($(this).attr("href"))}),i.on("click",".job-close",function(o){o.preventDefault(),n("",!1)}),t.on("click",function(o){$(o.target).is(".job-gallery")&&$(".fold-is-open").length>0&&n("",!1)})});