import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home"
import FeaturedLit from "./components/screens/FeaturedLit"
import BlogCollect from "./components/screens/BlogCollect"
import Dashboard from "./components/screens/Dashboard"
import ERR from "./components/screens/ERR"
import SingleBlog from './components/screens/SingleBlog'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props)=> <Home {...props} />} />
        <Route exact path="/FeaturedLit" render={(props)=> <FeaturedLit {...props} />} />
       
        <Route exact path="/BlogCollect"><BlogCollect /></Route>
        <Route exact path="/blog/:id" render={(props) => <SingleBlog {...props}/>}/>
        <Route exact path="/Dashboard"><Dashboard /></Route>
        <Route exact path="*"><ERR /></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
