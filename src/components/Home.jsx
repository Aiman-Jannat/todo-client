import Banner from "./Banner";
import Footer from "./Footer";
import TypesUser from "./TypesUser";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <p className="w-fit mx-auto text-center text-5xl my-14 py-2 border-8 border-y-0 border-red-600 px-3 font-semibold border-r-0 ">Users of our <span className="text-red-600 font-bold">ToDo App</span></p>  
            <TypesUser></TypesUser>
            <Footer></Footer>
        </div>
    );
};

export default Home;