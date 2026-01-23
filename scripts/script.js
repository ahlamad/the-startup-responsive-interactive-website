// Buttons & forms in variabelen stoppen
const hostButton = document.getElementById('host-button');
const guestButton = document.getElementById('guest-button');

const hostForm = document.querySelector('.host-notifications');
const guestForm = document.querySelector('.guest-notifications');

// Clickevent op de buttons 
hostButton.addEventListener('click', showHostNotifications);
guestButton.addEventListener('click', showGuestNotifications);

// 2 functies voor het tonen van gast- en verhuurdernotifcaties
function showHostNotifications() {
    hostForm.classList.remove('hidden');
    guestForm.classList.add('hidden');

    hostButton.classList.add('active');
    guestButton.classList.remove('active');
}

function showGuestNotifications() {
    guestForm.classList.remove('hidden');
    hostForm.classList.add('hidden');

    guestButton.classList.add('active');
    hostButton.classList.remove('active');
}
