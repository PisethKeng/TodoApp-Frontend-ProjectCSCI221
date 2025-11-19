import { useState } from "react";

// Added styling classes for better UI logic stays the same 

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
  };

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
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 max-w-2xl rounded-2xl bg-white p-6 shadow-md space-y-4"
    >
      <div>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
          />
        </label>
      </div>

      <div>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
            className="w-full min-h-[80px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
            <span>Priority</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
            <span>Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a category</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="health">Health</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
            <span>Due date</span>
            <input
              type="date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={clear}
          className="cancel-btn inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="create-btn inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-slate-950"
        >
          + Create
        </button>
      </div>
    </form>
  );
}
