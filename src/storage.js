export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}