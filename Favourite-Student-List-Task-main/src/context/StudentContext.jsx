import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Hussain", isFavourite: false },
    { id: 2, name: "Manoj", isFavourite: false },
    { id: 3, name: "Matthew", isFavourite: false },
    { id: 4, name: "Ayisha", isFavourite: false },
    { id: 5, name: "Ananya", isFavourite: false },
    { id: 6, name: "Emily", isFavourite: false },
  ]);

  // Function to add a student to the favorites list
  const addFavourite = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, isFavourite: true };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Function to remove a student from the favorites list
  const removeFavourite = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, isFavourite: false };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider value={{ students, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};
