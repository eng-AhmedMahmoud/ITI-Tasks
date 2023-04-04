import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id}=useParams();
    // console.log(x);
    return (
        <div>
            userDetails:{id}
        </div>
    );
};

export default UserDetails;