S                     Student Management System
student management system is a simply a system which is built by React js  and Vite.

This system or application will allow users to add,edit , delete, search and filter student records.
                        Project Description
The Student Management System is a React.js practical assignment designed to demonstrate important React concepts such as 
components, JSX, props, state management, event handling, arrays, objects, map(), filter(), conditional rendering, and reusable components.

The system provides a simple web interface for managing student information.

Each student contains:

Student ID
Full Name
Age
Course
Email
 
       Features
1. Add Student

Users can add a new student by entering:

Full Name
Age
Course
Email

2. Edit Student

Users can click the Edit button to load a student's information into the form.

The information can then be modified and updated.

3. Delete Student

Users can remove a student by clicking the Delete button.

The student is removed from the application immediately without refreshing the page.

4. Search Students

Users can search for students by their name.

For example:

John

The application displays students whose names match the search.


5. Form Validation

The application checks that required fields are completed before a student can be added or updated.


Technologies that i Used

React.js – Frontend JavaScript library
Vite – Development/build tool
JavaScript – Application logic
HTML/JSX – Structure and UI
CSS – Styling
Node.js / npm – Package management and development environment

main componets used :

Header.jsx =>it displays the application header/title.
StudentForm.jsx

was used  for:

Entering student information
Adding students
Editing students
Form validation
Handling form submission
StudentList.jsx

Responsible for displaying the collection of students.

It uses map() to display multiple student records.

StudentCard.jsx is used to display information about one student and provides:

Edit button
Delete button
SearchBar.jsx

Provides the search input used to search students by name and filter students by course.

App.jsx

Acts as the main component that connects the different components and manages the main application state.

React concepts and their uses :

Components :   Application is divided into reusable components
JSX :         Used to create the user interface
Variables in JSX :Used to display dynamic information
Import/Export	: Components are shared between files
Props :      Data and functions are passed between components
useState()	: Used to manage students, form data, search, and filters
onClick:	 Used for Edit and Delete buttons
onChange:	 Used to handle input changes
onSubmit:	 Used to handle form submission
Form Handling:	Used to add and update students
Arrays:	    Used to store student records
Objects  :	Each student is represented as an object
map():	    Used to display student cards
filter(): 	Used for searching, filtering, and deleting

IN Conclusion :This student Management System  was created for recording students information  in order to reduce the loss of records of the student informations . 