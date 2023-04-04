import React from 'react';

const Students = ({stds}) => {
    return (
        <div>
            {stds.map((std)=><div key={std.id} style={{backgroundColor:"pink",margin:"15px"}}>{std.name}</div>)}
        </div>
    );
};

export default Students;