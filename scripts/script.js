// Buttons & forms in variabelen stoppen
const hostButton = document.getElementById('host-button');
const guestButton = document.getElementById('guest-button');

const hostForm = document.querySelector('host-notifications');
const guestForm = document.querySelector('guest-notifications');

// Clickevent op de buttons 
hostButton.addEventListener('click', showHostNotifications);
guestButton.addEventListener('click', showGuestNotifications);

// 2 functies voor het tonen van gast- en verhuurdernotifcaties
