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

    const getTasksByPriority = (priority, tasks) => {
        return tasks.filter(task => task.priority === priority);
    };


    const getTasksByCategory = (category, tasks) => {
        return tasks.filter(task => task.category === category);
    };


    const getTasksByDueDate = (tasks) => {
        return [...tasks].sort((a, b) => {
            if (!a.duedate && !b.duedate) return 0;
            if (!a.duedate) return 1; 
            if (!b.duedate) return -1; 
            return new Date(a.duedate) - new Date(b.duedate);
        });
    };

    const getTasksByTitle = (tasks) => {
        return [...tasks].sort((a, b) => {
            if (!a.title && !b.title) return 0;
            if (!a.title) return 1; 
            if (!b.title) return -1;
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
    };
    // added task complete function
    const toggleTaskCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

    const value = { tasks, addTask, removeTask, updateTask, getTasksByPriority, getTasksByCategory, getTasksByDueDate, getTasksByTitle, toggleTaskCompleted };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}