// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  navbarscrollFunction();
  scrollFunction();
};



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//scroll smooth

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("button").on('click', function(event) {

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
			});
		} // End if
	});
});

function navbarscrollFunction() {

    var a = document.getElementsByTagName("a");
    var p = document.getElementsByTagName("p");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.height='40px';
    document.getElementById("logo").style.width='40px';
    document.getElementById("logo").style.marginTop='5px';
    // document.getElementById("logo").style.marginBottom='0px';


    p[0].style.fontSize = "18px";
    p[0].style.marginBottom = "10px";
    p[0].style.marginTop = "0px";



    var i;
    for(i = 0; i<5; i++){
      a[i].style.marginTop="0px";
    }

    var j;

    for(j = 0; j<5; j++){
      a[j].style.marginBottom="0px";
    }

    var ptop;

    for(ptop = 0; ptop<5; ptop++){
      a[ptop].style.paddingTop="10px";
    }


    var paddingBottom;
    for(paddingBottom= 0; paddingBottom <5; paddingBottom++){
      a[paddingBottom].style.paddingBottom="5px";
    }

  } else {
    document.getElementById("logo").style.display='block';
    document.getElementById("logo").style.height='90px';
    document.getElementById("logo").style.width='81px';
    document.getElementById("logo").style.marginTop='0px';

    var i;
    for(i = 0; i<5; i++){
      a[i].style.marginTop="30px";
    }

    //marginBottom for element a in navbar
    var j;

    for(j = 0; j<5; j++){
      a[j].style.marginBottom="30px";
    }

    for(ptop = 0; ptop<5; ptop++){
      a[ptop].style.paddingTop="0px";
    }

    var paddingBottom;
    for(paddingBottom= 0; paddingBottom <5; paddingBottom++){
      a[paddingBottom].style.paddingBottom="0px";
    }

    p[0].style.fontSize = "18px";
    p[0].style.marginTop = "15px";

  }
}
