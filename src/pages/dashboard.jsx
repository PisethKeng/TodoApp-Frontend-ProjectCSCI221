import { Trash2, SquarePen, CalendarDays, CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router";

export default function Dashboard({ tasks, removeTask, toggleTaskCompleted }) {
  const navigate = useNavigate();
  const { id, title, description, category, priority, duedate, completed } = { ...tasks };

  return (
    <div className="w-full mb-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex items-center justify-between gap-4 hover:shadow-md transition">
        <div className="flex items-start gap-4">
          <button className="mt-1 text-teal-600 hover:text-teal-700 transition"
          onClick={() => toggleTaskCompleted(id)}
          >
            <CircleCheckBig className="w-6 h-6" />
          </button>

          <div>
            <h3 
            className={`text-lg font-semibold text-gray-900 leading-tight ${completed ? "text-gray-400 line-through" : "text-gray-900"}`}
            >
              {title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <CalendarDays className="w-4 h-4" />
                <span>{duedate}</span>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                ${priority === "high" && "bg-red-100 text-red-700"}
                ${priority === "medium" && "bg-yellow-100 text-yellow-700"}
                ${priority === "low" && "bg-green-100 text-green-700"}`}
              >
                {priority}
              </span>

              <span className="px-3 py-1 rounded-full border text-xs font-medium text-gray-600">
                {category}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition"
            onClick={() => navigate("/EditTask/" + id)}
          >
            <SquarePen className="w-5 h-5" />
          </button>
          <button
            className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
            onClick={() => removeTask(id)}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
