import { useState } from 'react';

export function TaskForm({ onAddTask }) {
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        priority: 'low',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newTask.title.trim()) return;

        onAddTask(newTask);
        setNewTask({
            title: '',
            description: '',
            priority: 'low',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2>Nueva Tarea</h2>
            <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
                placeholder="Titulo  de la tarea"
                required
            />
            <button type="submit">Añadir Tarea</button>
        </form>
    );
}