function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedCourse,
  setSelectedCourse
}) {
  return (
    <div className="search-bar">
      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search by student name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <select
        value={selectedCourse}
        onChange={(event) => setSelectedCourse(event.target.value)}
      >
        <option value="All Courses">All Courses</option>

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
    </div>
  );
}

export default SearchBar;