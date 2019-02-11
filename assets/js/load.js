$(document).ready(function() {
  console.log("Ready");

  //Hamburger Menu Handler
  $('.nav-toggle').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('nav-open');
  });


  //Job fold code
  var gallery = $('.job-gallery'),
		foldingPanel = $('.job-folding-panel'),
		mainContent = $('.job-main');
	/* open folding content */
	gallery.on('click', 'a', function(event){
		event.preventDefault();
		openItemInfo($(this).attr('href'));
    console.log($(this).attr('href'));
	});

	/* close folding content */
	foldingPanel.on('click', '.job-close', function(event){
		event.preventDefault();
		toggleContent('', false);
	});
	gallery.on('click', function(event){
		/* detect click on .job-gallery::before when the .job-folding-panel is open */
		if($(event.target).is('.job-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
	})

	function openItemInfo(url) {
		var mq = viewportSize();
		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
			/* if content is visible above the .job-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top
			}, 100, function(){
	           	toggleContent(url, true);
	        });
	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
			/* if content is visible below the .job-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
			}, 100, function(){
	           	toggleContent(url, true);
	        });
		} else {
			toggleContent(url, true);
		}
	}

	function toggleContent(url, bool) {
		if( bool ) {
			/* load and show new content */
			var foldingContent = foldingPanel.find('.job-fold-content');
			foldingContent.load(url+' #jobDescription', function(event){
				setTimeout(function(){
					$('body').addClass('overflow-hidden');
					foldingPanel.addClass('is-open');
					mainContent.addClass('fold-is-open');
				}, 100);

			});
		} else {
			/* close the folding panel */
			var mq = viewportSize();
			foldingPanel.removeClass('is-open');
			mainContent.removeClass('fold-is-open');

			(mq == 'mobile' || $('.no-csstransitions').length > 0 )
				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
				? $('body').removeClass('overflow-hidden')

				: mainContent.find('.job-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').removeClass('overflow-hidden');
					mainContent.find('.job-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
		}

	}

	function viewportSize() {
		/* retrieve the content value of .job-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.job-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}


});
