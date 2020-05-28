import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumbs from "../parts/Breadcrumbs";
import Comment from "../parts/Comment"
import PostDesc from "../parts/PostDesc"
import CommentForm from "../parts/CommentForm"


const FeaturedLit = () => {
  return (
    <>

      <Header />
      <Breadcrumbs />
          <div className="single-post no-sidebar"> 
          
                <PostDesc />
               
                <Comment />
                <CommentForm />
          </div>

      <Footer />

    </>
  )
};
export default FeaturedLit;