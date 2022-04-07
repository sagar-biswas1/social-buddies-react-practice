import React from 'react';
import PostUserStatus from '../postInput/PostUserStatus';
import Posts from '../Posts/Posts';
import Notifications from './Notifications';


const Home = () => {
    return (
      <div>
        <PostUserStatus />
        <div class='d-flex flex-column-reverse flex-md-row justify-content-center'>
          <Posts />{" "}
          <div>
            <Notifications />
          </div>
        </div>
      </div>
    );
};

export default Home;