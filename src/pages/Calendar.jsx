import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SideBar from "../components/SideBar";
import { useTasks } from "../context/TaskProvider";

export default function Calendar() {
    const { tasks } = useTasks();
    const [currentDate, setCurrentDate] = useState(new Date());

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const daysArray = [];

    for (let i = firstDayIndex; i > 0; i--) {
        daysArray.push({
            day: daysInPrevMonth - i + 1,
            month: month - 1,
            year: month === 0 ? year - 1 : year,
            isCurrentMonth: false,
        });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({
            day: i,
            month: month,
            year: year,
            isCurrentMonth: true,
        });
    }

    const remainingCells = 42 - daysArray.length;
    let nextMonthIndex = month + 1;
    let nextYear = year;
    if (nextMonthIndex > 11) {
        nextMonthIndex = 0;
        nextYear = year + 1;
    }

    for (let i = 1; i <= remainingCells; i++) {
        daysArray.push({
            day: i,
            month: nextMonthIndex,
            year: nextYear,
            isCurrentMonth: false,
        });
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const todayKey = new Date().toISOString().split('T')[0];

    return (
        <div className="min-h-screen bg-[#FBFBF9] flex justify-center">
            <div className="w-full max-w-6xl px-4 py-6 md:px-8 md:py-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <SideBar />

                    {/* Calendar Content */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                            <h1 className="text-2xl sm:text-3xl font-semibold">
                                {monthNames[month]} <span className="font-light">{year}</span>
                            </h1>

                            <div className="flex gap-3 self-start sm:self-auto">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 rounded-full hover:bg-gray-100 border border-gray-200"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextMonth}
                                    className="p-2 rounded-full hover:bg-gray-100 border border-gray-200"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Grid Wrapper (scrollable on small screens) */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <div className="min-w-[700px] grid grid-cols-7 border-t border-l">
                                    {/* Weekday Headers */}
                                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                        <div
                                            key={day}
                                            className="p-3 bg-[#0D9488] border-r border-black text-xs sm:text-sm font-medium text-white text-center"
                                        >
                                            {day}
                                        </div>
                                    ))}

                                    {/* Days Loop */}
                                    {daysArray.map((dateObj, idx) => {
                                        const dateString = `${dateObj.year}-${String(dateObj.month + 1).padStart(2, '0')}-${String(dateObj.day).padStart(2, '0')}`;

                                        // Filter tasks to exclude completed ones
                                        const dayTasks = tasks.filter(
                                            task => task.duedate === dateString && !task.completed
                                        );

                                        return (
                                            <CalendarDay
                                                key={idx}
                                                dayNumber={dateObj.day}
                                                isCurrentMonth={dateObj.isCurrentMonth}
                                                events={dayTasks}
                                                isToday={dateString === todayKey}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ========== DAY CELL COMPONENT ========== */
function CalendarDay({ dayNumber, isCurrentMonth, events = [], isToday }) {

    // Helper to color-code based on Category
    const getCategoryColor = (category) => {
        switch (category?.toLowerCase()) {
            case "work": return "bg-orange-200 text-orange-800";
            case "personal": return "bg-blue-200 text-blue-800";
            case "study": return "bg-purple-200 text-purple-800";
            case "health": return "bg-green-200 text-green-800";
            default: return "bg-yellow-200 text-yellow-800";
        }
    };

    return (
        <div
            className={`p-2 border-r border-b ${
                !isCurrentMonth ? "bg-gray-50 text-gray-400" : "bg-white"
            }`}
        >
            <div className="flex justify-between">
                <span
                    className={`text-xs sm:text-sm ${
                        isToday
                            ? "w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-semibold"
                            : ""
                    }`}
                >
                    {dayNumber}
                </span>
            </div>

            {/* Events List */}
            <div className="mt-1 space-y-1 overflow-y-auto max-h-[80px] scrollbar-hide">
                {events.map((ev, idx) => (
                    <div
                        key={idx}
                        className={`text-[10px] sm:text-xs px-2 py-1 rounded-sm truncate ${getCategoryColor(ev.category)}`}
                        title={ev.title}
                    >
                        {ev.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
