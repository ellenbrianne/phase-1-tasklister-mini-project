// document.addEventListener("DOMContentLoaded", () => {
  
//   let form = document.getElementById('create-task-form');

//   form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     let input = form.querySelector('#new-task-description');
//     let list = document.createElement('li')
//     document.querySelector('#tasks').appendChild(list)
//     list.textContent = input.value

//     form.reset();

//   });

// });

// After re-watching the example video, I see that I did things in a way that technically works but isn't very re-usable & doesn't allow for adding on other features (such as buttons to delete each item, etc.). Below, I'll write out the example from the video so I can compare my thought process to a way that's easier, cleaner, and more versatile.

document.addEventListener('DOMContentLoaded', () => {

// side note to this: i prefer to assign every selected element a variable rather than chaining on all these selectors for ease of understanding what i'm doing; that's not how they did in the example. i was forced to make input variable because of the hyphens in the ID, but in the example, they passed in (e.target.new_todo.value) as the argument for buildToDo

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let form = document.querySelector('form');
    let input = form.querySelector('#new-task-description').value;
    buildToDo(input);
    form.reset();
  });

  function buildToDo (todo) {
    let list = document.createElement('li')
    let btn = document.createElement('button');
    btn.textContent = 'X';
    btn.addEventListener('click', handleDelete);
    list.textContent = todo;
    document.querySelector('#tasks').appendChild(list);
    list.appendChild(btn);
  };

  function handleDelete (e) {
    e.target.parentNode.remove();
  };

});