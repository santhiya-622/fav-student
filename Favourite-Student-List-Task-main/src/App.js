import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext"; // Correct import
import StudentDetails from "./components/StudentDetails";  // Corrected import
import FavouriteStudent from "./components/FavouriteStudent"; // Corrected import

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetails />} />
          <Route path="/fav" element={<FavouriteStudent />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
