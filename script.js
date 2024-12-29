// Get references to DOM elements
const addButton = document.getElementById('button-addon2');
const taskInput = document.querySelector('.form-control');
const content = document.querySelector('.content');

// Add event listener for the "Add" button
addButton.addEventListener('click', () => {
  // Get the value of the input
  const taskText = taskInput.value.trim();

  // Check if input is not empty
  if (taskText !== '') {
    // Create a new task element
    const taskElement = document.createElement('div');
    taskElement.className = 'd-flex align-items-center justify-content-between mb-2';

    // Add inner HTML for the task
    taskElement.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="${taskText.replace(/\s+/g, '-')}" />
        <label class="form-check-label" for="${taskText.replace(/\s+/g, '-')}">
          ${taskText}
        </label>
      </div>
      <i class="fa-solid fa-xmark text-danger delete-icon"></i>
    `;
    const checkbox = taskElement.querySelector('.form-check-input');
    const label = taskElement.querySelector('.form-check-label');

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });

    // Append the new task to the content area
    content.appendChild(taskElement);

    // Clear the input field
    taskInput.value = '';

    // Add event listener to the delete icon
    const deleteIcon = taskElement.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => {
      taskElement.remove();
    });
  } else {
    alert('Please enter a task!');
  }
});
