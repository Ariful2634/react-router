/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    const navigate = useNavigate();
    const handler = ()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div className="use ">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            {/* <Link to={`/user/${id}`}><button>Show Details</button></Link> */}
            <button onClick={handler}>Show Details</button>
        </div>
    );
};

export default User;