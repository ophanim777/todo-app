import { Project } from './projects';
import { Todo } from './todos';
import { saveProjects, loadProjects } from './storage';
let projects = loadProjects();