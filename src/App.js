import React, { useState, useRef } from 'react';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

import './App.css';

const App = () => {

  const inputRef = useRef(null)

  let objCourses = {
    courses : [
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'HTML5'},
      {name : 'CSS3'},
    ],
    current : ''
  }

  const [courses, setCourses] = useState(objCourses)

  // Add new course
  function addCourse(e){
    e.preventDefault()
    console.log('new course added')

    let current = courses.current
    let newCourses = courses.courses
 
    newCourses.push({name : current})
  
    setCourses({
      courses : newCourses,
      current : ''
    })

    inputRef.current.value = ''
    inputRef.current.focus()

    let elem = document.querySelector(".course_add")
    elem.innerHTML = 'Good, your course added successfully.'
    elem.classList.remove('hide')

    setTimeout(function(){ 
      elem.classList.add('hide')
    }, 3000);
  }

  // Update each course
  function updateCourse(e){
    setCourses({
        ...courses, current:e.target.value
    })
  }

  // Delete course
  function deleteCourse(id){
    let coursesLists = courses.courses
    // let newCourses = coursesLists.filter( (course, index) => {
    //   return index !== id
    // });

    coursesLists.splice(id, 1)

    setCourses({
      courses : coursesLists,
      current : ''
    })

    let elem = document.querySelector(".course_add")
    elem.innerHTML = 'Good, your course deleted successfully.'
    elem.classList.remove('hide')

    setTimeout(function(){ 
      elem.classList.add('hide')
    }, 3000);
  }

  // Edit your course
  function editCourse(id, value){
    let newCourses = courses.courses
    newCourses[id] = {name : value}

    setCourses({
      courses : newCourses,
      current : ''
    })

    let elem = document.querySelector(".course_add")
    elem.innerHTML = 'Good, your course updated successfully.'
    elem.classList.remove('hide')

    setTimeout(function(){ 
      elem.classList.add('hide')
    }, 3000);

  }

  const coursesList = courses.courses
  const courseLength = coursesList.length

  function listCourses() {
      return (courseLength) ? (
        coursesList.map( (course, index) => {
              return (
                <CourseList editCourse={editCourse} 
                            key={index} 
                            deleteCourse={deleteCourse} 
                            detail={course} 
                            indexCourse={index} />

              )
          })
      )
      :
      (
          <p className='alert alert-warning'>Sorry, not courses found in this list</p>
      )
  }

  return (
    <div className="App">
      <h2>Add Course</h2>
        <p className='alert alert-success course_add hide'></p>
        <CourseForm addCourse={addCourse} inputRef={inputRef} updateCourse={updateCourse} /> 
        
        <ul>{listCourses()}</ul>
    </div>
  );
}

export default App;
