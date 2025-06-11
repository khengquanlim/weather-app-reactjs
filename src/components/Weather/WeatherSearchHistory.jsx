const WeatherSearchHistory = ({ weatherHistoryList, onReSearch, onDelete }) => {
    console.log(weatherHistoryList)
    if (!weatherHistoryList?.length) return null;

    return (
        <div className="w-full mt-4">
        <h3 className="text-md font-semibold mb-2">Search History</h3>
        <ul className="space-y-2">
            {weatherHistoryList.map(entry => (
            <li
                key={entry.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded shadow"
            >
                <div>
                <span className="font-medium">
                    {entry.city}, {entry.country}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                    {new Date(entry.timestamp).toLocaleTimeString()}
                </span>
                </div>
                <div className="flex gap-2">
                <button
                    onClick={() => onReSearch(entry)}
                    className="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Re-search
                </button>
                <button
                    onClick={() => onDelete(entry.id)}
                    className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Delete
                </button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default WeatherSearchHistory;