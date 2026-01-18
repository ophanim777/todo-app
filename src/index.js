import { renderProjects } from './dom';

document.body.innerHTML = `
<h1>Todo App</h1>
<div id="projects"></div>
<div id="todos"></div>
`;

renderProjects(document.getElementById('projects'));
