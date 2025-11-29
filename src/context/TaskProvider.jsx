import { useState, useContext, createContext, useEffect } from "react";
import { v4 } from 'uuid';

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        const task = {
            ...newTask,
            id: v4(),
            // createdAt: new Date().toISOString()
        };
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const updateTask = (taskId, updatedTask) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === taskId ? { ...task, ...updatedTask } : task
            )
        );
    };

     const toggleTaskCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

    const value = { tasks, addTask, removeTask, updateTask, toggleTaskCompleted };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}