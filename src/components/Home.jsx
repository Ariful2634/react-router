import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation()
    console.log(navigation)
    return (
        <div>
            <h2>
                This Is The Home Components
            </h2>
            <Header></Header>
            {/* {
                navigation.state==="loading" ? <P>Loading...</P> : 
            } */}
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;