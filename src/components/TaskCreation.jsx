import { useState } from "react";

export default function TaskCreation({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [duedate, setDuedate] = useState("");

  const clear = () => {
    setTitle("");
    setDescription("");
    setPriority("");
    setCategory("");
    setDuedate("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description: description || "",
      category: category || "Other",
      priority: priority || "Medium",
      duedate: duedate || null,
    };
    onCreate(newTask);
    clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
            Title
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required/>
        </label>
      </div>

      <div>
        <label>
            Description
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description"></textarea>
        </label>
      </div>

      <div>
        <div>
          <label>
            Priority
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="">Select a priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>   
        </div>

        <div>
          <label>
            Category
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="study">Study</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
            </select>    
        </label>
        </div>
      </div>

      <div>
        <label>
            Due date
            <input type="date" value={duedate} onChange={(e) => setDuedate(e.target.value)}/>
        </label>
      </div>

      <div>
        <button type="button" className="cancel-btn" onClick={clear}>
          Cancel
        </button>
        <button type="submit" className="create-btn">
          + Create
        </button>
      </div>
    </form>
  );
}
