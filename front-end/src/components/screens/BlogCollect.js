import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumbs from "../parts/Breadcrumbs";
import Sidebar from "../parts/Sidebar";
import Post from "../parts/Post";



const BlogCollect =() => {
    return (
      <>

        <Header />
        <Breadcrumbs />
          <section className="blog-section">
            <div className="container">
              <div className="row">
                <Post />
                <Sidebar />
              </div>
            </div>
          </section>

        <Footer />
 
      </>
    )
};

export default BlogCollect;