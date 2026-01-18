export function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}
export function loadProjects() {
    const data = localStorage.getItem('projects');
    if (!data) return [];  // return empty array if no data

    const parsed = JSON.parse(data);

    // Restore class instances
    return parsed.map(projectData => {
        const project = new (require('./projects').Project)(projectData.name);
        project.todos = projectData.todos.map(todoData => {
            const todo = new (require('./todos').Todo)(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
                todoData.notes
            );
            todo.completed = todoData.completed;
            return todo;
        });
        return project;
    });
}