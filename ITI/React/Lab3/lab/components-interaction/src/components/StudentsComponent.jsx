import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentsComponent = ({ students }) => {
    return (
        <div class="container">
            <div class="row">
                {students.length > 0 ? (
                    students.map((student) => (
                        <div class="col-md-6" key={student.id}>
                            <div class="card mb-3">
                                <div class="card-header bg-danger text-white">
                                    Student Information
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{student.name}</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        Age: {student.age}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div class="col-md-6 m-auto">
                        <div class="alert alert-danger" role="alert">
                            No Students yet!
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentsComponent;
