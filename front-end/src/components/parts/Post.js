import React, { useEffect, useState } from "react";

import PostItem from "./PostItem";
import Pagination from "./Pagination";
import actions from '../../services/index'
import { Link } from 'react-router-dom'
const Posts = () => {
const [blogs, setBlog] = useState(null)
  
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const blogs = await actions.getPosts();
      console.log(blogs)
      setBlog(blogs.data)
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  return (
    <div className="col-lg-8">
     
    <div className="blog-box list-style">


    <div className="sidebar">
      {blogs && blogs.map(blog => <div key = {blog.title} className="widget list-widget">
          <h2> { blog.title} </h2>
          <ul className="list-posts">
            <li>
              <a className="text-link" href="#">
              { blog.category}
              </a>
              <h2> {/* link to single page or blog if hardcoded*/}
                <Link to={{
                  pathname:`blog/${blog._id}`,
                  state: {blog}
                  }}>TEST LOCATION OF BLOG</Link>
              </h2>
              <ul className="post-tags">
                {/* <li> {blogs ? blogs[0].timestamp : timestamp}</li> */}
                <li>2 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
            
              </ul>
            </li>
          </ul>
        </div>)}
      </div>







      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
