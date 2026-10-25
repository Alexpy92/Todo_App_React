import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onToggleCompleted, onDeleteTask }) {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleCompleted={onToggleCompleted}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
}