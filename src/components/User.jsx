/* eslint-disable react/prop-types */


const User = ({user}) => {
    const {name,email,phone}=user;
    return (
        <div className="use">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;