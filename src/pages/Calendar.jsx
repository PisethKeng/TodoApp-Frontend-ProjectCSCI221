import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SideBar from "../components/SideBar";

export default function Calendar() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] flex justify-center items-start py-10">

      {/* Main Container (Sidebar + Content) */}
      <div className="flex w-[90%] max-w-[1400px] gap-10">
        
        {/* LEFT: Sidebar */}
        <div className="w-72">
          <SideBar />
        </div>

        {/* RIGHT: Calendar Section */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold">
              November <span className="font-light">2025</span>
            </h1>

            <div className="flex gap-3">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-t border-l bg-white rounded-xl overflow-hidden shadow-sm">

            {/* Weekday Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="p-3 bg-gray-50 border-r border-b text-sm font-medium text-gray-600"
              >
                {day}
              </div>
            ))}

            {/* ROW 1 */}
            <CalendarDay number={29} dim />
            <CalendarDay number={30} dim events={[
              { label: "Groomers appt.", color: "bg-yellow-200" }
            ]}/>
            <CalendarDay number={1} />
            <CalendarDay number={2} />
            <CalendarDay number={3} events={[
              { label: "Meeting w/ Chris", color: "bg-red-200" }
            ]}/>
            <CalendarDay number={4} />
            <CalendarDay number={5} events={[
              { label: "Lunch w/ Mom", color: "bg-blue-200" }
            ]}/>

            {/* ROW 2 */}
            <CalendarDay number={6} />
            <CalendarDay number={7} events={[
              { label: "Financial Advisor Meeting", color: "bg-red-200" }
            ]}/>
            <CalendarDay number={8} events={[
              { label: "Interview w/ Figma", color: "bg-orange-200" },
              { label: "Send follow-up email", color: "bg-yellow-200" },
            ]}/>
            <CalendarDay number={9} />
            <CalendarDay number={10} />
            <CalendarDay number={11} />
            <CalendarDay number={12} events={[
              { label: "Ashley’s Choir Recital", color: "bg-blue-200" }
            ]}/>

            {/* ROW 3 */}
            <CalendarDay number={13} events={[
              { label: "Is this when the Superbowl is?", color: "bg-blue-200" },
              { label: "Run to the store to get some nachos", color: "bg-blue-200" },
              { label: "Deadline: Submit application", color: "bg-red-200" },
            ]} showMore />
            <CalendarDay number={14} events={[
              { label: "Budget for next month", color: "bg-red-200" }
            ]}/>
            <CalendarDay number={15} highlight events={[
              { label: "Vaccine appt.", color: "bg-yellow-200" },
              { label: "Take Jake to dinner", color: "bg-orange-200" },
            ]}/>
            <CalendarDay number={16} />
            <CalendarDay number={17} events={[
              { label: "St. Patrick’s Day!", color: "bg-blue-200" },
              { label: "DMV appointment", color: "bg-red-200" },
            ]}/>
            <CalendarDay number={18} events={[
              { label: "PTO day", color: "bg-yellow-200" }
            ]}/>
            <CalendarDay number={19} />

            {/* ROW 4 */}
            <CalendarDay number={20} events={[
              { label: "Dinner with Kate and Dan", color: "bg-blue-200" }
            ]}/>
            <CalendarDay number={21} />
            <CalendarDay number={22} events={[
              { label: "Important work meeting", color: "bg-orange-200" },
              { label: "Costco trip", color: "bg-yellow-200" },
            ]}/>
            <CalendarDay number={23} />
            <CalendarDay number={24} events={[
              { label: "Fly to Japan", color: "bg-blue-200" }
            ]}/>
            <CalendarDay number={25} events={[
              { label: "Hot dog eating contest", color: "bg-blue-200" },
              { label: "Meeting w/ architect", color: "bg-red-200" },
              { label: "Movie date night", color: "bg-blue-200" },
            ]} showMore />
            <CalendarDay number={26} />

            {/* ROW 5 */}
            <CalendarDay number={27} />
            <CalendarDay number={28} events={[
              { label: "Meeting w/ Mac", color: "bg-red-200" }
            ]}/>
            <CalendarDay number={29} events={[
              { label: "Pick up Jerry from doc appt.", color: "bg-yellow-200" },
              { label: "Radiohead concert", color: "bg-blue-200" },
            ]}/>
            <CalendarDay number={30} events={[
              { label: "Learn something new", color: "bg-yellow-200" }
            ]}/>
            <CalendarDay number={31} dim />
            <CalendarDay number={1} dim />
            <CalendarDay number={2} dim />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ========== DAY CELL COMPONENT ========== */
function CalendarDay({ number, events = [], dim = false, highlight = false, showMore = false }) {
  return (
    <div className={`h-32 p-2 border-r border-b ${dim ? "bg-gray-50 text-gray-400" : "bg-white"}`}>
      <div className="flex justify-between">
        <span
          className={`text-sm ${
            highlight
              ? "w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-semibold"
              : ""
          }`}
        >
          {number}
        </span>
      </div>

      {/* Events */}
      <div className="mt-1 space-y-1">
        {events.slice(0, 3).map((ev, idx) => (
          <div key={idx} className={`text-xs px-2 py-1 rounded-sm truncate ${ev.color}`}>
            {ev.label}
          </div>
        ))}

        {showMore && (
          <button className="text-xs text-blue-600 underline">view more</button>
        )}
      </div>
    </div>
  );
}
