import React from 'react';

const CourseForm = (props) => {
    return (
        <div>
            <form>
                <input type="text" value='' onChange={props.updateCourse} />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default CourseForm;
