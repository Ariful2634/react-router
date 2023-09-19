import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const users= useLoaderData();
    const {name,email,phone}=users;
    return (
        <div className="use">
            <h2>Details about user</h2>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;