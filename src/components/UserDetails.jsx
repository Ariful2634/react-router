import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const users= useLoaderData();
    const {name,email,phone}=users;
    const navi = useNavigate();
    const handle =()=>{
        navi(-1)
    }
    return (
        <div className="use">
            <h2>Details about user</h2>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={handle}>Go Back</button>
        </div>
    );
};

export default UserDetails;