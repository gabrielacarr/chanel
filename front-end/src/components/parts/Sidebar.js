import React from "react";

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">


        <div className="widget category-widget">
          <h2>Categories</h2>
          <ul className="category-list">
            <li>
              <a href="#">
                Travel <span>24</span>
              </a>
            </li>
            <li>
              <a href="#">
                Designer Lifestyle <span>16</span>
              </a>
            </li>
            <li>
              <a href="#">
                Fragrance <span>8</span>
              </a>
            </li>
          </ul>
        </div>

     

                <div className="widget cateory-widget">
                    <h2>Quote of the day:</h2>
                    <p>
                    Simplicity is the keynote of all true elegance -Coco Chanel

                    </p>
                </div>
            </div>
        </div>

  
  );
};

export default Sidebar;
