(function($){
	var theind = 0;
	var thecoding = "CODING";

	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $(".navitem>a").on('click', function(event) {
	  	var thisa = this;
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	        $(".navitem").removeClass("active");
	        $(thisa).parentsUntil("","li").addClass("active");
	      });
	    } // End if
	  });
	});

	setInterval(function(){
		if(theind==2){
			$(".thei").html("I");
			$(".thei").addClass("active");
		}
		else if(theind==7){
			$(".theimg").attr("src","images/showlove.png");
			$(".homeimg").addClass("active");
		}
		else if(theind > 11 && theind < 30){
			var res = thecoding.substring(0, theind - 11);
			$(".thecoding").html(res);
			$(".thecoding").addClass("active");
		}
		theind++;
		if(theind>43){
			theind=0;
			$(".hometext").html("");
			$(".theimg").attr("src","");
		}
		else if(theind==40){
			$(".hometextanimate").removeClass("active");
		}
	},200);

	//initialize the pentagons from homepage. current is 15 randomize pentagon location, angle and scale.
	for(var a=0;a<20;a++){
		var thelefttoadd = parseFloat(((Math.random()+0.1)*0.01).toFixed(4));
		var theleft = parseInt(Math.random()*90);
		var thetop = parseInt(Math.random()*60);
		var thedeg = parseInt(Math.random()*360);
		var thepentagon = $('<div class="pentagon" thedefleft="'+theleft+'" thedeftop="'+thetop+'" thedeftoadd="'+thelefttoadd+'" thedefdeg="'+thedeg+'"></div>');
		$(thepentagon).css({"left":theleft+"vw",
							"top":thetop+"vh",
							"-webkit-transform":"scale("+((thelefttoadd/0.01)*.5).toFixed(2)+") rotate("+thedeg+"deg)"
						});
		$(".ilovecoding").prepend($(thepentagon));
	}
	//end of pentagons initialization
	//move pentagons oposite to mouse cursor;
	var curx;
	var cury;
	var movecount=0;
	setTimeout(function(){
		$(".pentagon").css({"opacity":"1"});
		$("body").on('mousemove',function(evt){
			curx = parseFloat(evt.clientX).toFixed(2);
			cury = parseFloat(evt.clientY).toFixed(2);
			if(movecount>0){
				$(".pentagon").each(function(){
					var thedefleft = parseInt($(this).attr("thedefleft"));
					var thedeftop =parseInt($(this).attr("thedeftop"));
					var thedeftoadd = parseFloat($(this).attr("thedeftoadd")).toFixed(4);
					var thecenterleft =parseInt($("body").css("width").replace("px",""))/2;
					var thecentertop = parseInt($("body").css("height").replace("px",""))/2;
					var theleft = ((thecenterleft-(parseFloat(curx))) * (.001 + parseFloat(thedeftoadd)));
					var thetop = ((thecentertop-(parseFloat(cury))) * (.001 + parseFloat(thedeftoadd)));
					$(this).css({"left":(thedefleft+theleft)+"vw",
								"top":(thedeftop+thetop)+"vh"});
				});
				movecount=0;
			}
			movecount++;
		});
		var polycount = $(".pentagon").length;
		setInterval(function(){
			var currentpoly = parseInt(Math.random()*polycount);
			var thepoly = $($(".pentagon")[currentpoly]);
			$(thepoly).css("-webkit-transform","scale(.5)");
			var thedeftoadd = parseFloat($(thepoly).attr("thedeftoadd"));
			var thedefdeg = parseInt($(thepoly).attr("thedefdeg"));
			setTimeout(function(){
				$($(".pentagon")[currentpoly]).css("-webkit-transform","scale("+((thedeftoadd/0.01)*.2).toFixed(2)+") rotate("+thedefdeg+"deg)");
			},2000);
		},500);
	},1);
	//end of pentagon cursor



	$(".nav-tabs>div").on('click',function(){
		//e.preventDefault();
		$(".nav-tabs>div").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		
	});
})(jQuery);