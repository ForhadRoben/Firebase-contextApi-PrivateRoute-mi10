import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import LeftNav from "../shared/LeftNav";
import RightNav from "../shared/RightNav";


const Main = () => {
    return (
        <div className="mx-auto md:max-w-screen-xl	">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-12 gap-4">
                <aside className="col-span-3 border-2"><LeftNav></LeftNav></aside>
                <main className="col-span-6 border-2"><Outlet></Outlet></main>
                <aside className="col-span-3 border-2"><RightNav></RightNav></aside>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;