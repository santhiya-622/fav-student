import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

function FavouriteStudent() {
  const { students, removeFavourite } = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-blue-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-opacity-80 backdrop-blur-md shadow-lg">
        <div className="flex space-x-4">
          <h1 className="text-3xl font-bold tracking-wide hover:text-black transition-colors duration-300">
            <Link to="/">Student List</Link>
          </h1>
          <h1 className="text-3xl font-bold tracking-wide hover:text-black transition-colors duration-300">
            <Link to="/fav">Favourite Students</Link>
          </h1>
        </div>
      </header>

      {/* Favourite Students List */}
      <main className="mt-8 px-6">
        <h2 className="text-center text-4xl font-extrabold mb-6">Your Favourite Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {students
            .filter((student) => student.isFavourite)
            .map((student, index) => (
              <div
                key={student.id}
                className="bg-white text-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="border-2 border-gray-300 rounded-md p-2 mb-4">
                  <h3 className="text-xl font-semibold text-center">{index + 1}. {student.name}</h3>
                </div>
                <button
                  onClick={() => removeFavourite(student.id)}
                  className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-black transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      </main>

      {/* Message when no favourite students */}
      {students.filter((student) => student.isFavourite).length === 0 && (
        <div className="text-center mt-12 text-xl">
          <p>No favourite students yet. Start adding some from the <Link to="/" className="text-yellow-200 underline hover:text-black transition-colors duration-300">Student List</Link>.</p>
        </div>
      )}
    </div>
  );
}

export default FavouriteStudent;
