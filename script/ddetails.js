"use strict";define(["jquery"],function(){return{init:function(){require(["jquery"],function(){var t=this,n=$(".tab_panel_fixed"),o=$("#louti"),e=$(".fixed .return_top");$(window).on("scroll",function(){var i=$(t).scrollTop();750<i?n.show():n.hide(),780<i?o.show():o.hide(),800<i?e.show():e.hide()}),e.on("click",function(){$("html,body").animate({scrollTop:0},"slow")});var i=location.search.substring(1).split("=")[1];i=i||1,$.ajax({url:"http://localhost/dangdang/src/php/getimgid.php",data:{imgid:i},dataType:"json"}).done(function(i){$(".st").find("img").attr({src:i.img,sid:i.id}),$(".df").find("img").attr({src:i.img}),$(".name_info h1").html(i.bookname),$(".name_info h2").html(i.title),$(".message_info span:eq(0) a").html(i.author),$(".priceleft .p2 span:eq(1)").html(i.price),$("#feature img").attr({src:i.feature}),$("#pr").html(i.price);var t=i.listimg.split(",");$.each(t,function(i,t){var n="\n                            <li><img src='"+t+"'/></li>\n                        ";$("#list ul").append(n)});var n=$("#list ul li").eq(0).outerWidth(!0),o=$("#list ul li").length,e=5,s=$("#left"),a=$("#right");o<=5?(s.hide(),a.hide()):(s.show(),a.show()),a.on("click",function(){e<o&&(e++,s.css("background","#fb7a80 url(../img/product_sprites.png)no-repeat 0 0"),e===o&&a.css("background","none"),$("#list ul").animate({left:-n*(e-5)}))}),s.on("click",function(){5<e&&(e--,a.css("background","#fb7a80 url(../img/product_sprites.png)no-repeat -15px 0"),5===e&&s.css("background","none"),$("#list ul").animate({left:-n*(e-5)}))})});var r=$(".st"),l=$(".sf"),u=$(".dt"),d=$(".df");r.hover(function(){d.css("visibility","visible"),l.css("visibility","visible")},function(){d.css("visibility","hidden"),l.css("visibility","hidden")}),r.on("mousemove",function(i){var t=r.width()*d.width()/u.width(),n=r.height()*d.height()/u.height(),o=i.pageX-r.offset().left-t/2,e=i.pageY-r.offset().top-n/2,s=r.width()-t,a=r.height()-n;o<0&&(o=0),s<o&&(o=s),e<0&&(e=0),a<e&&(e=a);var c=u.width()/r.width();l.css({width:t,height:n,left:o,top:e}),u.css({left:-o*c,top:-e*c})}),$("#list ul").on("mouseover","li",function(){r.find("img").attr("src",$(this).find("img").attr("src")),d.find("img").attr("src",$(this).find("img").attr("src"))}),$(".num_add").on("click",function(){var i=parseInt($(".buy_num").val());i++,$(".buy_box .num .num_del").css({backgroundColor:"#646464"}),$(".buy_num").val(i)}),$(".num_del").on("click",function(){var i=parseInt($(".buy_num").val());--i<=1&&(i=1,$(".buy_box .num .num_del").css({backgroundColor:"#ccc"})),$(".buy_num").val(i)});var s=[],a=[];function c(){a=oCookie.get("cookiesid")&&oCookie.get("cookienum")?(s=oCookie.get("cookiesid").split(","),oCookie.get("cookienum").split(",")):(s=[],[])}c(),$(".buy_box_btn").on("click",function(){c(),$(".tanchuang").show(),$(".promo_btn").on("click",function(){$(".tanchuang").hide()});var i=$(".st img").attr("sid"),t=$(".buy_num").val();if(-1!=$.inArray(i,s)){var n=parseInt(a[$.inArray(i,s)])+parseInt(t);a[$.inArray(i,s)]=n,oCookie.add("cookienum",a,100)}else s.push(i),oCookie.add("cookiesid",s,100),a.push(t),oCookie.add("cookienum",a,100)})})}}});