$(document).ready(function () {
	"use strict";

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("navbar-scroll-top").style.top = "0";
	    document.getElementById("card-scroll-top").style.top = "76px";
	  } else {
	    document.getElementById("navbar-scroll-top").style.top = "-60px";
	    document.getElementById("card-scroll-top").style.top = "16px";
	  }
	  prevScrollpos = currentScrollPos;
	}

	$('.chart').click(function (){
		var target = $(this).attr("data-target");
		var data = $(this).children('.data').text();
		var options = $(this).children('.options').text(); 
		var type = $(this).attr("data-type");
		if (type == null) {type = 'PieChart';}
		var str = "<script> google.charts.load('current', {'packages': ['corechart']}); google.charts.setOnLoadCallback(drawChart); function drawChart(){var data = google.visualization.arrayToDataTable("+ data +"); var options = " + options +"; var charts = new google.visualization."+type+"(document.getElementById('"+ target +"')); charts.draw(data,options); } </script> <div class=\"show\" id=\""+ target + "\"></div>";
		$(this).html(str);
		$(this).off("click");
	});
	
	$('.navbar-slide-scroll .nav-link[href*="#"]:not([href="#"]), a.slide-scroll[href*="#"]:not([href="#"])').on("click", function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){  
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	$('body').scrollspy({
	    target: '#sideNav'
	 });

	$('.navbar-slide-scroll .nav-link, a.slide-scroll').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	$(".snackbar-toggle").click(function(){
		var y = $(this).attr("data-target");
		var x = document.getElementById(y);
		x.className = "snackbar show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	});
	
	var jumlahKomentar = 3;

	$(".btn-komentar").click(function(){
		jumlahKomentar +=1;
		$(".jumlah-komentar").text(jumlahKomentar + " Komentar");
		var user = $(".text-user").val();
		if (user=="") {user="unknow";}
		$(".isi-komentar").html(function(i, origText){
			return origText + '<div class="media"> <img src="img/wong.png"> <div class="media-body"> <span class="media-name">'+ user +'</span> <span class="media-time">1 menit yang lalu</span> <span class="media-text">'+ $(".text-komentar").val() +'</span> </div> </div>';
		});
		$(".text-komentar").val("");
		$(".text-user").val("");
	});

	$(".respon-item").click(function(){
		var x = $(".respon-jml").text();
		var y = x.substring(0,(x.indexOf('R')-1));
		y++;
		$('.respon-jml').text(y + ' Responses');
	});

	$(".open-sidenav").click(function(){
		document.getElementById("sidenav").style.width = "250px";
		document.getElementById("sidenavOverlay").style.display = "block";
	});

	$(".close-sidenav, #sidenav a").on("click",function(){
		document.getElementById("sidenav").style.width = "0";
		document.getElementById("sidenavOverlay").style.display = "none";
	});

	$(".open-sidenav-v").click(function(){
		document.getElementById("sidenav-v").style.height = "350px";
		document.getElementById("sidenavOverlay").style.display = "block";
	});

	$(".close-sidenav-v, #sidenav-v a").on("click",function(){
		document.getElementById("sidenav-v").style.height = "0";
		document.getElementById("sidenavOverlay").style.display = "none";
	});

	$(window).scroll(function() {
		$(".slideanim-top").each(function() {
			var pos = $(this).offset().top;
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600){
				$(this).addClass("slider-top");
			}
		});
	});

	$(window).scroll(function() {
		$(".slideanim-left").each(function() {
			var pos = $(this).offset().top;
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600){
				$(this).addClass("slider-left");
			}
		});
	});

	$(window).scroll(function() {
		$(".slideanim-right").each(function() {
			var pos = $(this).offset().top;
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600){
				$(this).addClass("slider-right");
			}
		});
	});

	$(window).scroll(function() {
		$(".slideanim").each(function() {
			var pos = $(this).offset().top;
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600){
				$(this).addClass("slider");
			}
		});
	});

	$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    	$('.hidetop').fadeIn();
    } else{
      $('.scrolltop').fadeOut();
      $('.hidetop').fadeOut();
    };

    $(window).scroll(function(){
    	var winScroll = $(this).scrollTop();
    	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	    var scrolled = (winScroll / height) * 100;
	    $(".progressbar-scroll").css("width",scrolled+"%");
    });

  });

});

