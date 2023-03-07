const modal = document.getElementById('modal');
const closeButton = modal.querySelector('#fechar');
const openButton = document.getElementById('abrir');
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

openButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
