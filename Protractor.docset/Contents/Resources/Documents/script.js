
$(function () {
	/*
var sql = '';
$('.protractor-api, .locators-api, .webdriver-api').children().each(function(){
   var name = $(this).text();
   var path = $(this).find('a').attr('href');
   			path = path.replace(/api/g, '');
				path = path.replace(/-/g, '');

   sql += '\n';
   sql += "INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES ('"+name+"', 'Method', '"+ path +"');";
});
console.log(sql);
*/

	
	//Take all .anchor elements and make the id the name
	$('.anchor').each(function(){
		var n = $(this).attr('name');
				n = n.replace(/user-content-/g, '');
			$(this).attr('id', n);				
	});

	//Take all links and remove (api-) From the href
	$('.task-list li a').each(function(){
		var a = $(this).attr('href');
				a = a.replace(/api/g, '');
				a = a.replace(/-/g, '');

			$(this).attr('href', a);
	});

	//Smooth scroll to element
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
 