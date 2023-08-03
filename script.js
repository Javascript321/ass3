document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
  
    addButton.addEventListener('click', function () {
      const todoText = todoInput.value.trim();
      if (todoText === '') return;
  
      createTodoItem(todoText);
      todoInput.value = '';
    });
  
    function createTodoItem(todoText) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      const todoLabel = document.createElement('label');
      const deleteButton = document.createElement('button');
  
      checkbox.type = 'checkbox';
      todoLabel.textContent = todoText;
      deleteButton.textContent = 'Delete';
  
      checkbox.addEventListener('change', function () {
        li.classList.toggle('checked');
        if (checkbox.checked) playDingSound();
        if (checkbox.checked) moveItemToBottom(li);
      });
  
      deleteButton.addEventListener('click', function () {
        li.remove();
      });
  
      li.appendChild(checkbox);
      li.appendChild(todoLabel);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  
    function moveItemToBottom(item) {
      todoList.appendChild(item);
    }
  
    function playDingSound() {
      // Play the 'ding' sound when a to-do item is checked
      // You can use an audio element or any other method to play the sound
      // For simplicity, let's just log "Ding!" to the console.
      console.log('Ding!');
    }
  });
  