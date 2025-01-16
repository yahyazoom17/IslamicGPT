import React from "react";
import Navbar from "../components/navbar";
import Chatarea from "../components/chatarea";
import Footer from "../components/footer";

const Home = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Chatarea />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;