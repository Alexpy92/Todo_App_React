import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function TaskDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
    completed: false,
    });

    useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);
        const foundTask = parsedTasks.find((item) => item.id === id);
        if (foundTask) {
        setTask(foundTask);
        }
    }
    }, [id]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const savedTasks = localStorage.getItem('tasks');
    if (!savedTasks) return;

    const parsedTasks = JSON.parse(savedTasks);
    const updatedTasks = parsedTasks.map((item) =>
        item.id === id ? { ...task } : item
    );

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigate('/');
    };

    return (
    <div className="task-details-container">
        <h2>Editar Tarea</h2>
        <form onSubmit={handleSubmit} className="task-form">
        <label>Título</label>
        <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
        />

        <label>Descripción</label>
        <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="4"
        />

        <label>Prioridad</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
        </select>

        <div className="form-actions">
            <button type="submit" className="btn-save">Guardar Cambios</button>
            <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
            Cancelar
            </button>
        </div>
        </form>
    </div>
    );
}