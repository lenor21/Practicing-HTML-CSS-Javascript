const iconTrigger = document.querySelector('#iconTrigger');
const icon = document.querySelector('#icon');
const sidebarMain = document.querySelector('.menu-container');

iconTrigger.addEventListener('click', () => {
	if (icon.classList.contains('fa-bars')) {
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-close');

		sidebarMain.classList.remove('hide');
		sidebarMain.classList.add('show');
	} else {
		icon.classList.add('fa-bars');
		icon.classList.remove('fa-close');

		sidebarMain.classList.add('hide');
		sidebarMain.classList.remove('show');
	}
})