import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
const FailedToFetch = ({ errorMessage, refetch }) => {
  return (
    <div className="flex items-start gap-3 bg-red-100 border border-red-300 text-red-700 rounded-md p-4 max-w-md">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="w-6 h-6 text-red-500 mt-1 flex-shrink-0"
      />
      <div>
        <h3 className="text-base font-semibold">Something went wrong</h3>
        <p className="text-sm mt-1">{errorMessage}</p>
        <button
          onClick={() => refetch()} // ✅ retry when clicked
          className="mt-3 inline-block bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailedToFetch;
