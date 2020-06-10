import React from 'react';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

import './App.css';

function App() {

  function updateCourse(){

  }

  return (
    <div className="App">
      <h2>Add Course</h2>
        <CourseForm updateCourse={updateCourse} /> 
        <ul>
          <CourseList />
        </ul>
    </div>
  );
}

export default App;
