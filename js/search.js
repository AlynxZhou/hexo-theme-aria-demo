// build time:Mon Mar 26 2018 14:32:15 GMT+0800 (CST)
"use strict";var searchFunc=function(t,e,r){$.ajax({url:t,dataType:"xml",success:function(t){var n=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),link:$("link",this).attr("href")}}).get();var a=document.getElementById(e);var i=document.getElementById(r);a.addEventListener("input",function(){var t='<ul class="search-result-list">';var e=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="";if(this.value.trim().length<=0){return}n.forEach(function(r){var n=true;var a=r.title.trim().toLowerCase();var i=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var s=r.link;var c=-1;var l=-1;var o=-1;if(a!=""&&i!=""){e.forEach(function(t,e){c=a.indexOf(t);l=i.indexOf(t);if(c<0&&l<0){n=false}else{if(l<0){l=0}if(e==0){o=l}}})}if(n){t+='<li><a href="'+s+'" class="search-result-title">'+"> "+a+"</a>";var f=r.content.trim().replace(/<[^>]+>/g,"");if(o>=0){var u=o-6;var v=o+12;if(u<0){u=0}if(u==0){v=10}if(v>f.length){v=f.length}var h=f.substring(u,v);e.forEach(function(t){var e=new RegExp(t,"gi");h=h.replace(e,'<strong class="search-keyword">'+t+"</strong>")});t+='<p class="search-result-content">'+h+"...</p>"}}});i.innerHTML=t})}})};
//rebuild by neat 