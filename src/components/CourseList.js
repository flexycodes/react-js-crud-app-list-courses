import React, { useState, useRef } from 'react'

const CourseList = (props) => {
    const [state, setState] = useState({isEdit : false})
    const inputRef = useRef(null)

    // toggleState
    function toggleState(e) {
        let {isEdit} = state;
        setState({
            isEdit: !isEdit
        })
    }

    function listCourses() {
        return (
            <li>
                <span>{props.detail.name}</span>
                <button onClick={() => toggleState()}>Edit Course</button>
                <button onClick={() => props.deleteCourse(props.index)}>Delete Course</button>
            </li> 
        )
    }

    function updateCourseItem(e) {
        e.preventDefault();
        props.editCourse(props.indexCourse , inputRef.current.value);
        toggleState();
    }

    // render Update Form
    function renderUpdateForm() {
        return (
            <div>
                <form onSubmit={updateCourseItem}>
                    <input type="text" ref={inputRef}  />
                    <button type="submit">Update Course</button>
                </form>
            </div>
        )
    }
    
    let {isEdit} = state

    return (
        <div> 
            <ul>{(isEdit) ? renderUpdateForm() : listCourses()}</ul>
        </div>
    )
}

export default CourseList
