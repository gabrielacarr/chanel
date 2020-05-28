import React from "react";

const PostItem = () => {
    return (
      <div className="sidebar">
      <div className="widget list-widget">
          <h2>Latest Stories</h2>
          <ul className="list-posts">
            <li>
              <a className="text-link" href="#">
                Lifestyle
              </a>
              <h2>
                <a href="http://cocoat5.blogspot.com/">Fusce pellentesque suscipit.</a>
              </h2>
              <ul className="post-tags">
                <li>2 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
            
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default PostItem;