import { Project } from './projects';
import { Todo } from './todos';
import { saveProjects, loadProjects } from './storage';

let projects = loadProjects();

if (projects.length === 0) {
    projects.push(new Project('Default'));
    saveProjects(projects);
}

export function renderProjects(container) {
    container.innerHTML = '';
    projects.forEach((project, i) => {
        const div = document.createElement('div');
        div.textContent = project.name;
        div.addEventListener('click', () => renderTodos(project, document.getElementById('todos')));
        container.appendChild(div);
    });
}

export function renderTodos(project, container) {
    container.innerHTML = '';
    project.todos.forEach((todo, i) => {
        const div = document.createElement('div');
        div.textContent = `${todo.title} - ${todo.dueDate}`;
        div.style.color = todo.priority === 'high' ? 'red' : todo.priority === 'medium' ? 'orange' : 'green';
        div.addEventListener('click', () => alert(JSON.stringify(todo, null, 2)));
        container.appendChild(div);
    });
}