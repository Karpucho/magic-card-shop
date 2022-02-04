if (document.querySelectorAll('.deletBasketButton')) {
  const buttons = document.querySelectorAll('.deletBasketButton');

  buttons.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();

      const basketCard = el.parentElement;
      const basketId = basketCard.id;

      await fetch(`/basket/${basketId}`, {
        method: 'DELETE',
      });

      basketCard.remove();
    });
  });
}
