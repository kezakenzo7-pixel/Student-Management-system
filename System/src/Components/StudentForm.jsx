import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newStudent = {
      id: "ST" + Date.now(),
      fullName: fullName.trim(),
      age: Number(age),
      course: course,
      email: email.trim()
    };

    onAddStudent(newStudent);

    setFullName("");
    setAge("");
    setCourse("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        min="1"
        required
      />

      <select
        value={course}
        onChange={(event) => setCourse(event.target.value)}
        required
      >
        <option value="">Select Course</option>

        <option value="Software Development">
          Software Development
        </option>

        <option value="Computer Science">
          Computer Science
        </option>

        <option value="Information Technology">
          Information Technology
        </option>

        <option value="Networking">
          Networking
        </option>
      </select>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <button type="submit" className="add-button">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;