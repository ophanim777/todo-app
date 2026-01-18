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
