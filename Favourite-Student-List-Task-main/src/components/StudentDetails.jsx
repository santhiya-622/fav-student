import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

function StudentDetails() {
  const { students, addFavourite } = useContext(StudentContext);

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

      {/* Student List */}
      <main className="mt-8 px-6">
        <h2 className="text-center text-4xl font-extrabold mb-6">All Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white text-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="border-2 border-gray-300 rounded-md p-2 mb-4">
                <h3 className="text-xl font-semibold text-center">{student.name}</h3>
              </div>
              <button
                onClick={() => addFavourite(student.id)}
                className={`w-full py-2 px-4 rounded-lg shadow-md ${
                  student.isFavourite
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-black transition-colors duration-300"
                }`}
                disabled={student.isFavourite}
              >
                {student.isFavourite ? "Favorited" : "Add Favourite"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StudentDetails;
