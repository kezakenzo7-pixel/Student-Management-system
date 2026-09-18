import { useState } from "react";

import Header from "./Components/Header";
import StudentForm from "./Components/StudentForm";
import SearchBar from "./Components/SearchBar";
import StudentList from "./Components/StudentList";

import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: "ST001",
      fullName: "John Doe",
      age: 21,
      course: "Software Development",
      email: "john@example.com"
    },

    {
      id: "ST002",
      fullName: "Jane Smith",
      age: 22,
      course: "Computer Science",
      email: "jane@example.com"
    },

    {
      id: "ST003",
      fullName: "Peter James",
      age: 20,
      course: "Information Technology",
      email: "peter@example.com"
    },

    {
      id: "ST004",
      fullName: "Mary Grace",
      age: 23,
      course: "Networking",
      email: "mary@example.com"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCourse, setSelectedCourse] =
    useState("All Courses");

  function addStudent(newStudent) {
    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent
    ]);
  }

  function updateStudent(updatedStudent) {
    setStudents((previousStudents) =>
      previousStudents.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        }

        return student;
      })
    );
  }

  function deleteStudent(studentId) {
    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => student.id !== studentId
      )
    );
  }

  const filteredStudents = students.filter((student) => {
    const matchesName = student.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCourse =
      selectedCourse === "All Courses" ||
      student.course === selectedCourse;

    return matchesName && matchesCourse;
  });

  return (
    <div className="app-container">
      <Header />

      <StudentForm onAddStudent={addStudent} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />

      <div className="records-header">
        <h2>Student Records</h2>

        <p> 
          Total Students: <strong>{students.length}</strong>
        </p >     </div>

      {filteredStudents.length === 0 ? (
        <p className="no-students">
          No students found.
        </p>
      ) : (
        <StudentList
          students={filteredStudents}
          onUpdateStudent={updateStudent}
          onDeleteStudent={deleteStudent}
        />
      )}
    </div>
  );
}

export default App;