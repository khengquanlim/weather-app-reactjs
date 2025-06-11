import { LuSearch, LuTrash2 } from "react-icons/lu";

const WeatherSearchHistory = ({ weatherHistoryList, onReSearch, onDelete }) => {
  if (!weatherHistoryList?.length) return null;

  return (
    <div className="w-full mt-6">

        <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-sm">
            <h3 className="text-left mb-3 font-medium text-ms text-black">Search History</h3>
            <ul className="space-y-3">
                {weatherHistoryList.map((entry) => (
                <li
                    key={entry.id}
                    className="flex items-center justify-between px-4 py-3 min-h-[52px]
                            rounded-xl bg-white/20 backdrop-blur-md
                            hover:bg-black/10 transition-all shadow-sm hover:shadow-md"
                >
                    <div className="flex justify-between items-center w-full">
                        <span className="font-semibold text-black">
                            {entry.city}, {entry.country}
                        </span>
                    </div>

                    {/* RIGHT ICON BUTTONS */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-black">
                            {new Date(entry.timestamp).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                            })}
                        </span>
                        <button
                            onClick={() => onReSearch(entry)}
                            className="place-items-center w-9 h-9 rounded-full
                                    bg-white text-black transition"
                            aria-label="Re-search"
                        >
                            <LuSearch clsasName="text-black" size={18} />
                        </button>
                        <button
                            onClick={() => onDelete(entry.id)}
                            className="place-items-center w-9 h-9 rounded-full
                                    bg-white text-black transition"
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
