// Papan Tugas sederhana — tersimpan di memori selama halaman terbuka.

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const prioritySelect = document.getElementById('task-priority');
const list = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const summary = document.getElementById('task-summary');

let tasks = [];
let nextId = 1;

function render() {
  list.innerHTML = '';

  if (tasks.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = task.priority + (task.done ? ' done' : '');

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = 'Prioritas ' + task.priority;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.setAttribute('aria-label', 'Hapus tugas');
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', () => removeTask(task.id));

    li.addEventListener('click', (e) => {
      if (e.target === removeBtn) return;
      toggleTask(task.id);
    });

    li.appendChild(text);
    li.appendChild(tag);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });

  updateSummary();
}

function updateSummary() {
  if (tasks.length === 0) {
    summary.textContent = '';
    return;
  }
  const done = tasks.filter((t) => t.done).length;
  summary.textContent = `${done} dari ${tasks.length} tugas selesai.`;
}

function addTask(text, priority) {
  tasks.push({ id: nextId++, text, priority, done: false });
  render();
}

function removeTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  render();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return; // validasi input kosong
  addTask(text, prioritySelect.value);
  input.value = '';
  input.focus();
});

render();