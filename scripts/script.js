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

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.addEventListener('click', function(event) {
          const link = this.querySelector('a');

          if (link) {
              const phoneNumber = link.dataset.phoneNumber;
              const app = link.dataset.app;

              if (app === 'whatsapp') {
                  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
              } else if (app === 'telegram') {
                  window.open(`https://t.me/${phoneNumber}`, '_blank');
              } else if (link.href.startsWith('tel:')) {
                  navigator.clipboard.writeText(link.textContent.trim())
                      .then(() => {
                          alert('Номер скопирован!');
                      })
                      .catch(err => {
                          console.error('Failed to copy: ', err);
                          alert('Не удалось скопировать номер. Пожалуйста, попробуйте скопировать вручную.');
                      });
              } else if (link.href.startsWith('mailto:')) {
                  window.location.href = link.href;
              }
          } else {
              const address = "г. Бишкек, ул. Токтогула 10";
              window.open(`https://yandex.ru/maps/-/CHemz22w`, '_blank');
          }
      });
  });
});