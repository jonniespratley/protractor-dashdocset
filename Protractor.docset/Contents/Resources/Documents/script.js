//Protractor DocSet
$(document).ready(function(){

	console.log('Document ready!');



	//Take all links and remove (api-) From the href

	//Take all .anchor elements and make the id the name

	$('.anchor').each(function(){
		var n = $(this).attr('name');

				n = n.replace(/user-content-/g, '');

			$(this).attr('id', n);				
			console.log(n);
	});

	$('.task-list li a').each(function(){
		var a = $(this).attr('href');
				a = a.replace(/api/g, '');
				a = a.replace(/-/g, '');

			$(this).attr('href', a);

			console.log(a);
	});





	
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      		console.log(target);

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});