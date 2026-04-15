const form = document.querySelector('.form-section form');
const taskInput = document.querySelector('.form-section input[type="text"]');
const prioritySelect = document.querySelector('.form-section select');
const taskList = document.querySelector('.list-section ul');

let taskId = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === "") return;

  taskId++;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task-' + taskId;

  const label = document.createElement('label');
  label.setAttribute('for', checkbox.id);
  label.textContent = taskText;

  const span = document.createElement('span');
  span.className = 'priority ' + priority;
  span.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.className = 'remove';
  removeBtn.addEventListener('click', () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(removeBtn);

  taskList.appendChild(li);

  taskInput.value = '';
});
