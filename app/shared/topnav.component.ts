import {Component, OnInit} from 'angular2/core';

declare var $: any;

@Component({
    selector: 'top-nav',
    templateUrl: 'shared/topnav.component.html'
})
export class TopNavComponent implements OnInit {
	public loginTitle = 'Welcome!!!';

	ngOnInit() {
		$('.custom-menu a[href^="#"], .intro-scroller .inner-link').on('click', function(e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function() {
				window.location.hash = target;
			});
		});

		$(".nav a").on("click", function() {
			$(".nav").find(".active").removeClass("active");
			$(this).parent().addClass("active");
		});
	}
}