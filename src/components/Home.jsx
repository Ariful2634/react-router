import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <h2>
                This Is The Home Components
            </h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;