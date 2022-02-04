if (document.querySelectorAll('.addButton')) {
  const buttons = document.querySelectorAll('.addButton');

  buttons.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();

      const cardId = el.parentElement.parentNode.parentNode.parentNode.parentNode.id;

      const response = await fetch(`/basket/${cardId}`, {
        method: 'POST',
      }).then((answer) => answer.json());

      switch (response.message) {
        case 'addedBefore':
          alert('Данная карточка уже в корзине');
          break;
        case 'error':
          alert('Ошибка');
          break;
        default:
          break;
      }
      console.log(response);
      // basketCard.remove();
    });
  });
}
