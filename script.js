document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');

      // Create task text span
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskSpan.classList.add('task-text');

      // Create edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', e => {
        e.stopPropagation();
        const newText = prompt('Edit task:', taskSpan.textContent);
        if (newText !== null && newText.trim() !== '') {
          taskSpan.textContent = newText.trim();
        }
      });

      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '×';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', e => {
        e.stopPropagation();
        taskList.removeChild(listItem);
      });

      // Add all elements to the list item
      listItem.appendChild(taskSpan);
      listItem.appendChild(editBtn);
      listItem.appendChild(deleteBtn);

      // Add click event for completing tasks
      listItem.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  });

  // Add keyboard event to input
  taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });
});
