const listCards = document.querySelector('.deleteButton');
const listCards1 = document.querySelector('.editButton');

listCards.addEventListener('click', (event) => {
  console.log(event.target.textContent, event.target, 'ПУТЬ');

  if (event.target.textContent === 'Delete') {
    event.preventDefault();

    const { id } = event.target;

    const deleteUrl = `/edit/delete/${id}`;
    // console.log(href, 'ПУТЬ');
    fetch(deleteUrl, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          event.target.closest('.entry').remove();
        }
      })
      .catch((err) => console.log(err));
  }
});

listCards1.addEventListener('click', (event) => {
  console.log(event.target.textContent, event.target, 'ПУТЬ');

  if (event.target.textContent === 'Edit') {
    // event.preventDefault();

    const { id } = event.target;

    const editUrl = `/edit/${id}`;
    // console.log(href, 'ПУТЬ');
    fetch(editUrl, {
      method: 'GET',
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
});
