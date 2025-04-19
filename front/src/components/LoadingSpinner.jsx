import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ClipLoader size={50} color="#f7ce26" loading={true} />
      <p className="mt-4 text-xl text-gray-600">Loading Products...</p>
    </div>
  );
};

export default LoadingSpinner;
