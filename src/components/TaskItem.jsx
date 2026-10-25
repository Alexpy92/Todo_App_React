import { Link } from 'react-router-dom';

export function TaskItem({ task, onToggleCompleted, onDeleteTask }) {
    return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className={`priority ${task.priority}`}>
            Prioridad: {task.priority}
        </span>
        </div>

        <div className="task-actions">
        {/* Botón para editar */}
        <Link to={`/editar/${task.id}`} className="btn-edit">
            Editar
        </Link>

        {/* Botón para cambiar estado */}
        <button 
            onClick={() => onToggleCompleted(task.id)}
            className="btn-complete"
        >
            {task.completed ? 'Pendiente' : 'Completar'}
        </button>

        {/* Botón para eliminar */}
        <button 
            onClick={() => onDeleteTask(task.id)}
            className="btn-delete"
        >
            Eliminar
        </button>
        </div>
    </li>
    );
}