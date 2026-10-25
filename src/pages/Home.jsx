import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

export function Home() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (newTaskData) => {
        const newTask = {
            ...newTaskData,
            id: uuidv4(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        };

    const handleToggleCompleted = (Id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === Id ? { ...task, completed: !task.completed } : task
            );
            setTasks(updatedTasks);
        };

    const handleDeleteTask = (Id) => {
        const filteredTasks = tasks.filter((task) => task.id !== Id);
        setTasks(filteredTasks);
        };

    return (
        <div className="home-container">
            <h1>Gestor de Tareas</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onToggleCompleted={handleToggleCompleted}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}