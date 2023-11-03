/*import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import "./PostList.css";

const App = () => {
  return (
    <div className='container'>
      <h1>Create new post</h1>
      <PostCreate />
      <hr />
      <h1>All posts ⬡⬢⬡⬢</h1>
      <PostList />
    </div>
  );
};

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostCreate from './PostCreate';
import PostList from './PostList';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/posts">
            
              <>
                <h1>Create new post</h1>
                <PostCreate />
                <hr />
                <h1>All posts ⬡⬢⬡⬢</h1>
                <PostList />
              </>
            
          </Route>
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;



