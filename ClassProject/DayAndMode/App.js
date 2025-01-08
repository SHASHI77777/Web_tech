const button = document.getElementById('toggleButton');
const body = document.body;

button.addEventListener('click', function() {
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        button.textContent = 'Switch to Day Mode';
    } else {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        button.textContent = 'Switch to Night Mode';
    }
});

