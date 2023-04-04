import React, { useState } from 'react';
import AddComponent from './AddComponent';
import StudentsComponent from './StudentsComponent';

const RootComponent = () => {
    const [Students, setStudents] = useState([]);
    return (
        <div>
            <AddComponent setStudents={setStudents} />
            <StudentsComponent students={Students} />
        </div>
    );
};

export default RootComponent;