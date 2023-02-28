document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById('create-task-form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    let input = form.querySelector('#new-task-description');
    let list = document.createElement('li')
    document.querySelector('#tasks').appendChild(list)
    list.textContent = input.value

    form.reset();

  });

});