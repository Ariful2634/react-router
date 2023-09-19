/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div className="use ">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;