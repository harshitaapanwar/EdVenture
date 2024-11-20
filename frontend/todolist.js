// Select Elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add Task Event
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Form Values
  const title = document.getElementById('task-title').value;
  const details = document.getElementById('task-details').value;

  // Create Task Element
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <div>
      <h3>${title}</h3>
      <p>${details}</p>
    </div>
    <button class="complete-btn">Complete</button>
  `;

  // Append to Task List
  taskList.appendChild(taskItem);

  // Clear Form
  taskForm.reset();

  // Remove Empty State
  const emptyMessage = document.querySelector('.task-item.empty');
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Add Complete Button Event
  taskItem.querySelector('.complete-btn').addEventListener('click', () => {
    taskItem.remove();

    // Check if Task List is Empty
    if (!taskList.querySelector('.task-item')) {
      const emptyMessage = document.createElement('div');
      emptyMessage.classList.add('task-item', 'empty');
      emptyMessage.innerHTML = `<p>No tasks added yet!</p>`;
      taskList.appendChild(emptyMessage);
    }
  });
});
