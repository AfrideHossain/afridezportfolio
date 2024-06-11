import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen rounded-lg">
        <img
          src="https://i.ibb.co/hXFNzBn/26344431.png"
          alt="404 Not Found"
          className="mb-8 w-64 sm:w-96 animate-pulse"
        />
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Oops!
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center px-4 sm:px-8">
          Lost in the digital wilderness. This page seems to have gone on an
          unexpected vacation.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-md bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorElement;
