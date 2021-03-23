import React from 'react';
import { Link } from "react-router-dom";
import MessageTimeLine from './MessageTimeLine';

const Homepage = ({ currentUser }) => {
  if(!currentUser.isAuthenticated){
    return(
  <div className="home-hero">
    <h1>What's Happening</h1>
    <h4>New to Warbler?</h4>
    <Link to="/signUp" className="btn btn-primary">
      Sign Up Here!
    </Link>
  </div>
  );
}
  return (
  <div>
    <MessageTimeLine
    profileImgUrl = { currentUser.user.profileImgUrl }
    username = { currentUser.user.username } 
    />
  </div>
  ); 
};

export default Homepage;