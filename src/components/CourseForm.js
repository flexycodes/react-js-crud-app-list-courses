import React from 'react';

const CourseForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addCourse}>
                <input type="text" ref={props.inputRef} onChange={props.updateCourse} />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default CourseForm;
