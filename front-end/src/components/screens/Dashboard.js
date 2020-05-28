import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import UserHeader from "../parts/UserHeader";
import Quotes from "../parts/Quotes";
import Publish from "../parts/Publish";

import Sidebar from "../parts/Sidebar";
import Post from "../parts/Post";


const Dashboard =() => {
    return (

        <> 
            <Header />
                <UserHeader />
                    <section className="blog-section">
                        <div className="container">
                       
                            
                            <Publish />
                           
                        </div>
                        
                </section>
        </>

    )
};
export default Dashboard;