const iconTrigger = document.querySelector('#iconTrigger');
const icon = document.querySelector('#icon');
const menuContainer = document.querySelector('#menuContainer');

iconTrigger.addEventListener('click', () => {
	if (icon.classList.contains('fa-bars')) {
		icon.classList.add('fa-close');
		icon.classList.remove('fa-bars');

		menuContainer.classList.add('show');
		menuContainer.classList.remove('hide');
	} else {
		icon.classList.add('fa-bars');
		icon.classList.remove('fa-close');

		menuContainer.classList.add('hide');
		menuContainer.classList.remove('show');
	}
})