// build time:Tue Apr 10 2018 19:25:36 GMT+0800 (CST)
"use strict";(function(i){i(document).ready(function(){i("#back-to-top").on("click",function(){i("body, html").animate({scrollTop:0},600)});i("#reward-button").on("click",function(){i("#qr").slideToggle()});i("#nav-toggle").on("click",function(){i("#menu").slideToggle()});i(".toc").addClass("list-group");i(".toc-link").addClass("list-group-item");var t=40*16;if(i(window).width()<t){i("#menu").hide()}var n=i(window).width();i(window).resize(function(){if(i(window).width()>t){i("#menu").show()}else{if(i(window).width()!==n){i("#menu").hide();n=i(window).width()}}});i(".content").each(function(t){i(this).find("img").each(function(){if(this.title){i(this).after('<span class="caption">'+this.title+"</span>")}if(i(this).parent().prop("tagName")!=="A"){i(this).wrap('<a href="'+this.src+'" title="'+this.alt+'" class="gallery-item"></a>')}else{i(this).parent().addClass("img-link")}})});if(typeof lightGallery!="undefined"){var e={selector:".gallery-item"};i(".content").each(function(i,t){lightGallery(t,e)})}})})(jQuery);
//rebuild by neat 