const iconTrigger = document.querySelector('#iconTrigger');
const arrow = document.querySelector('#arrow');
const sidebarMain = document.querySelector('.sidebar-main');

iconTrigger.addEventListener('click', () => {
	if (arrow.classList.contains('fa-arrow-left')) {
		arrow.classList.remove('fa-arrow-left');
		arrow.classList.add('fa-arrow-right');

		sidebarMain.classList.add('hide');
		sidebarMain.classList.remove('show');
	} else {
		arrow.classList.add('fa-arrow-left');
		arrow.classList.remove('fa-arrow-right');

		sidebarMain.classList.remove('hide');
		sidebarMain.classList.add('show');
	}
})


