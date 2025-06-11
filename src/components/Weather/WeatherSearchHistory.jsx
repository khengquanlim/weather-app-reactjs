import React from "react";
import { LuSearch, LuTrash2 } from "react-icons/lu";

const WeatherSearchHistory = ({ weatherHistoryList, onReSearch, onDelete }) => {
  if (!weatherHistoryList?.length) return null;

  return (
    <div className="w-full mt-6">

        <div className="rounded-2xl bg-white/10 dark:bg-black/10 p-4 backdrop-blur-sm">
      <h3 className="text-center mb-3 font-medium text-white/80">Search History</h3>
            <ul className="space-y-3">
                {weatherHistoryList.map((entry) => (
                <li
                    key={entry.id}
                    className="flex items-center justify-between px-4 py-3 min-h-[52px]
                            rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-md
                            hover:bg-white/30 dark:hover:bg-black/40 transition-all shadow-sm hover:shadow-md"
                >
                    {/* LEFT SECTION */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 text-sm">
                    <span className="font-semibold text-white">
                        {entry.city}, {entry.country}
                    </span>
                    <span className="text-white/60 text-sm">
                        {new Date(entry.timestamp).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        })}
                    </span>
                    </div>

                    {/* RIGHT ICON BUTTONS */}
                    <div className="flex gap-2">
                    <button
                        onClick={() => onReSearch(entry)}
                        className="place-items-center w-9 h-9 rounded-full
                                bg-black/80 text-white hover:bg-white/60 hover:text-black transition"
                        aria-label="Re-search"
                    >
                        <LuSearch size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(entry.id)}
                        className="place-items-center w-9 h-9 rounded-full
                                bg-black/80 text-white hover:bg-white/60 hover:text-black transition"
                        aria-label="Delete entry"
                    >
                        <LuTrash2 size={18} />
                    </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default WeatherSearchHistory;
