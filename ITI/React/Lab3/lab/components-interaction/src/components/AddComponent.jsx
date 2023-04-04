import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const AddComponent = ({ setStudents }) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setStudents((prev) => [...prev, { id: prev.length + 1, name: name, age: age }])
        setName("")
        setAge("")
    }

    return (
        <div class="container bg-dark">
            <div class="row">
                <h1 className='my-3 text-white'>Enter student name</h1>
                <form class="col-md-6 m-auto">
                    <div class="form-group my-3">
                        <input type="text" class="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="form-group my-3">
                        <input type="number" class="form-control" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-danger form-control" onClick={handleSubmit}>Add</button>
                </form>
            </div>
            <hr className='my-5' />
        </div>

    );
};

export default AddComponent;