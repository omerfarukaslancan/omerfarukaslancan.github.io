document.addEventListener('DOMContentLoaded', (event) => {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDateTime = now.toLocaleString('tr-TR', { dateStyle: 'long', timeStyle: 'short' });
    dateTimeElement.textContent = formattedDateTime;
});
