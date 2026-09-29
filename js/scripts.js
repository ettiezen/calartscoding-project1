document.addEventListener('DOMContentLoaded', function() {
	var menuTrigger = document.querySelector('.js-menu-trigger');
  
	if (menuTrigger) {
	  menuTrigger.addEventListener('click', function() {
		document.body.classList.toggle('show-menu');
	  });
	}
  });