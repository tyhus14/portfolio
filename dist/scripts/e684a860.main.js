$(function(){$(".nav-items").bind("click",function(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top-80},1500)}),$(".scrollto").bind("click",function(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top-80},1500)}),$(".navbar-home").hover(function(){$(".home").toggleClass("active")}),$(".navbar-experience").hover(function(){$(".experience-js").toggleClass("active")}),$(".navbar-contact").hover(function(){$(".contact-js").toggleClass("active")})});