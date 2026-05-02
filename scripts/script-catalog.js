document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');

  copyButton.addEventListener('click', async function(event) {
      const phoneNumber = event.target.getAttribute('data-phone-number');
    try {
      await navigator.clipboard.writeText(phoneNumber);
        alert('Номер скопирован!');
    } catch (err) {
      console.error('Failed to copy: ', err);
        alert('Не удалось скопировать номер. Пожалуйста, попробуйте скопировать вручную.');
    }
  });
});