import { useState } from "react";

export default function TaskCreation({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("other");
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
    >
      <div className="mx-auto mt-6 rounded-2xl bg-white p-7 shadow-sm space-y-4">
        <label className="flex flex-col gap-2 text-base font-medium text-slate-600">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
          />
        </label>
      </div>

      <div className="mx-auto mt-6 rounded-2xl bg-white p-7 shadow-sm space-y-4">
        <div>
          <label className="flex flex-col gap-2 text-base font-medium text-slate-600">
            <span>Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
              className="w-full min-h-[80px] h-[130px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
            ></textarea>
          </label>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div>
            <label className="flex flex-col gap-2 text-base font-medium text-slate-600">
              <span>Priority</span>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
              >
                <option value="">Select a priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>

          <div>
            <label className="flex flex-col gap-2 text-base font-medium text-slate-600">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
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
        </div>

        <div className="mt-7 mb-12">
          <label className="flex flex-col gap-2 text-base font-medium text-slate-600">
            <span>Due date</span>
            <input
              type="date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
            />
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={clear}
            className="cancel-btn inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-7 py-2 text-base font-medium text-slate-600 shadow-sm transition duration-350 ease-in-out hover:bg-[#FFFFFF] hover:border-slate-500 hover:text-slate-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="create-btn inline-flex items-center rounded-2xl bg-[#0D9488] px-6 py-2 text-base font-medium text-white shadow-sm border-2 border-[#0D9488] transition duration-350 ease-in-out hover:bg-[#FFFFFF] hover:text-[#0D9488]"
          >
            + Create
          </button>
        </div>
      </div>
    </form>
  );
}
