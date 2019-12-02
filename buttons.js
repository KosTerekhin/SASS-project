// OVERLAY TOGGLE

const btns = Array.from(document.querySelectorAll('#btn-plus'));

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const id = btn.classList.value.split('')[0];
		const plusSpan = document.querySelector(`#plus-${id}`);
		const overlay = document.querySelector(`#overlay-${id}`);

		btn.classList.toggle('overlay-bg');
		plusSpan.classList.toggle('rotate');
		overlay.classList.toggle('visible');
	});
});

// MODAL OPEN

const projectBtn = document.querySelector('#projects');
const modal = document.querySelector('#modal');
const backdrop = document.querySelector('#backdrop');
const closeModal = document.querySelector('#close-modal');

projectBtn.addEventListener('click', () => {
	modal.classList.add('dblock');
});

// MODAL CLOSE

backdrop.addEventListener('click', () => {
	modal.classList.remove('dblock');
});

closeModal.addEventListener('click', () => {
	modal.classList.remove('dblock');
});
