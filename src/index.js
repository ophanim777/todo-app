import { renderProjects } from './dom';
import "./style.css";

document.body.innerHTML = `
<h1>Todo App</h1>
<div id="projects"></div>
<div id="todos"></div>
`;

renderProjects(document.getElementById('projects'));
