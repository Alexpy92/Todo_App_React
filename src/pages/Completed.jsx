import { useState, useEffect } from "react";
import { TaskList } from "../components/TaskList";

export function Completed() {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            const filteredTasks = parsedTasks.filter((task) => task.completed);
            setCompletedTasks(filteredTasks);
        }
    }, []);

    const handleToggleCompleted = (Id) => {
        const savedTasks = localStorage.getItem("tasks");
        if (!savedTasks) return;

        const parsedTasks = JSON.parse(savedTasks);
        const updatedTasks = parsedTasks.map((task) =>
            task.id === Id ? { ...task, completed: !task.completed } : task
        );

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setCompletedTasks(updatedTasks.filter((task) => task.completed === true));
    };

    const handleDeleteTask = (Id) => {
        const savedTasks = localStorage.getItem("tasks");
        if (!savedTasks) return;

        const parsedTasks = JSON.parse(savedTasks);
        const updatedTasks = parsedTasks.filter((task) => task.id !== Id);

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setCompletedTasks(updatedTasks.filter((task) => task.completed === true));
    };

    return (
        <div className="completed-container">
            <h1>Tareas Completadas</h1>
            <TaskList
            tasks={completedTasks}
            onToggleCompleted={handleToggleCompleted}
            onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}