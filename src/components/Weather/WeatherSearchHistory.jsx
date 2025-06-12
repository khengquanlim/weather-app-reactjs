import { LuSearch, LuTrash2 } from "react-icons/lu";

const WeatherSearchHistory = ({ weatherHistoryList, onReSearch, onDelete }) => {
  if (!weatherHistoryList?.length) return null;

  const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })
  }

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
                    {/* Left Text */}
                    <div className="md:flex xs:flex-col justify-between items-center w-full">
                        <div className="text-left text-sm font-semibold text-black">
                            {entry.city}, {entry.country}
                        </div>
                        <div className="text-left text-xs text-black/70">
                            {formatDate(entry.timestamp)}
                        </div>
                    </div>

                    {/* Right Icon Buttons */}
                    <div className="flex items-center gap-2 whitespace-nowrap ml-4">
                        <button
                            onClick={() => onReSearch(entry)}
                            className="place-items-center w-9 h-9 rounded-full
                                bg-white text-black transition"
                            aria-label="Re-search"
                        >
                            <LuSearch className="text-black" size={18} />
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
