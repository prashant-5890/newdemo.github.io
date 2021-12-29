jQuery(document).ready(function(){
	console.log("Doc is Ready!");
  jQuery(".menu-item-1778 a").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#form-main").offset().top
    }, 2000);
});
   jQuery(".menu-item-764 a").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#Membership-main").offset().top
    }, 2000);
});
jQuery(document).on("click",'li.menu-item-has-children a',function() { 
jQuery('.mobile_nav').removeClass('closed')
jQuery(this).toggleClass("menu-after");
console.log("HI THERERERERERERERE");
console.log(jQuery(this).siblings('.sub-menu').toggleClass("submenu-open"));
});

jQuery(document).on("click",'.sub-menu.submenu-open .menu-item a',function(e) { 
	console.log("HI ");
	return true;
});

var myInterval = setInterval(function () {
    console.log('find');
    var href = window.location.href
    console.log(href);
    if (href.includes("teachers")){
    	jQuery(".text_active").addClass('active');
    	clearInterval(myInterval);
    }else{
    	jQuery(".text_active").removeClass('active');
    }
},2000);

var newInterval = setInterval(function () {
    console.log('find');
    var href = window.location.href
    console.log(href);
    if (href.includes("contact-us")){
    	jQuery(".text_active_1").addClass('active');
    	clearInterval(newInterval);
    }else{
    	jQuery(".text_active_1").removeClass('active');
    }
},2000);
});