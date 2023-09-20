import { useRouteError } from "react-router-dom";


const Error = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <div>
            <h2 className="op">Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default Error;