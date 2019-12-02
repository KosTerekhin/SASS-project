// OVERLAY toggle

const btns = Array.from(document.querySelectorAll('#btn-plus'));

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const id = btn.classList.value.split('')[0];
		const plusSpan = document.querySelector(`#plus-${id}`);
		const overlay = document.querySelector(`#overlay-${id}`);
		const remove = () => {
			btn.classList.remove('overlay-bg');
			plusSpan.classList.remove('rotate');
			overlay.classList.remove('visible');
			overlay.removeEventListener('animationend', remove);
		};

		if (overlay.classList.contains('visible')) {
			overlay.style.animation = 'overlayOut 0.3s forwards';

			overlay.addEventListener('animationend', remove);
		} else {
			btn.classList.add('overlay-bg');
			plusSpan.classList.add('rotate');
			overlay.classList.add('visible');
			overlay.style.animation = 'overlayIn 0.3s forwards';
		}
	});
});

// MODAL OPEN

const projectBtn = document.querySelector('#projects');
const modal = document.querySelector('#modal');
const backdrop = document.querySelector('#backdrop');
const closeModal = document.querySelector('#close-modal');

projectBtn.addEventListener('click', () => {
	modal.classList.add('dblock');
	modal.style.animation = 'modalIn 1s forwards';
});

// MODAL CLOSE

const modalClose = () => {
	modal.classList.remove('dblock');
	modal.removeEventListener('animationend', modalClose);
};

backdrop.addEventListener('click', () => {
	modal.style.animation = 'modalOut 500ms forwards';
	modal.addEventListener('animationend', modalClose);
});

closeModal.addEventListener('click', () => {
	modal.style.animation = 'modalOut 500ms forwards';
	modal.addEventListener('animationend', modalClose);
});
