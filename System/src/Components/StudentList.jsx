import StudentCard from "./StudentCard";

function StudentList({
  students,
  onUpdateStudent,
  onDeleteStudent
}) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onUpdateStudent={onUpdateStudent}
          onDeleteStudent={onDeleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;