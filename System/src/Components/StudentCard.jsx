import { useState } from "react";

function StudentCard({
  student,
  onUpdateStudent,
  onDeleteStudent
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState(student.fullName);
  const [age, setAge] = useState(String(student.age));
  const [course, setCourse] = useState(student.course);
  const [email, setEmail] = useState(student.email);

  function startEditing() {
    setFullName(student.fullName);
    setAge(String(student.age));
    setCourse(student.course);
    setEmail(student.email);

    setIsEditing(true);
  }

  function cancelEditing() {
    setFullName(student.fullName);
    setAge(String(student.age));
    setCourse(student.course);
    setEmail(student.email);

    setIsEditing(false);
  }

  function handleUpdate(event) {
    event.preventDefault();

    const updatedStudent = {
      id: student.id,
      fullName: fullName.trim(),
      age: Number(age),
      course: course,
      email: email.trim()
    };

    onUpdateStudent(updatedStudent);

    setIsEditing(false);
  }

  function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      onDeleteStudent(student.id);
    }
  }

  if (isEditing) {
    return (
      <form
        className="student-card edit-form"
        onSubmit={handleUpdate}
      >
        <h3>Update Student</h3>

        <p>
          <strong>Student ID:</strong> {student.id}
        </p>

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

        <div className="button-group">
          <button type="submit" className="save-button">
            Save Update
          </button>

          <button
            type="button"
            className="cancel-button"
            onClick={cancelEditing}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="student-card">
      <h3>{student.fullName}</h3>

      <p>
        <strong>Student ID:</strong> {student.id}
      </p>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <div className="button-group">
        <button
          type="button"
          className="update-button"
          onClick={startEditing}
        >
          Update
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;