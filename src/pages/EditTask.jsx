import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { useTasks } from "../context/TaskProvider";

export default function EditTask() {


  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    duedate: "",
  });
//   categories dropdown
  const categories = [
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "study", label: "Study" },
  { value: "health", label: "Health" },
  { value: "others", label: "Others" },
];

  // Load existing task into form
  useEffect(() => {
    const existing = tasks.find((t) => t.id === id);
    if (existing) {
      setForm({
        title: existing.title || "",
        description: existing.description || "",
        category: existing.category || "",
        priority: existing.priority || "medium",
        duedate: existing.duedate || "",
      });
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask(id, {
      ...form,
    });

    navigate("/"); 
  };

  const handleCancel = () => {
    navigate(-1); // go back
  };

  const taskNotFound = !tasks.find((t) => t.id === id);

  if (taskNotFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBF9]">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Task not found
          </p>
          <p className="text-sm text-gray-500 mb-6">
            The task you are trying to edit does not exist or was removed.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to tasks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBF9] px-4">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Edit Task
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Update the details and save your changes.
              </p>
            </div>

            <button
              onClick={handleCancel}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Task title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Add more details about this task..."
              />
            </div>

            {/* Row: Due date & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Due date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Due date
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    name="duedate"
                    value={form.duedate}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Category
                    </label>

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                    >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                        ))}
                    </select>
                </div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Priority
              </label>
              <div className="flex gap-2">
                {["high", "medium", "low"].map((level) => (
                  <button
                    type="button"
                    key={level}
                    onClick={() =>
                      setForm((prev) => ({ ...prev, priority: level }))
                    }
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium border transition
                      ${
                        form.priority === level
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition shadow-sm"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
