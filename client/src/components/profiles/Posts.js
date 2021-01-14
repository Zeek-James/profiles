import React from "react";
import { Profile } from "./profile/Profile";

import Loader from 'react-loader-spinner'

import "./posts.css";

export const Posts = ({ posts, loading }) => {


  if (loading) {
    return <Loader type="Puff" color="#00BFFF" height={80} width={80} className='spinner' />
  }
    
  return (
      <div >
    <div className="profile_Container">
        {posts.map((post) => (
          <Profile key={post.CreditCardNumber} className='profile'
            post={post} />
        ))}
      </div>
    </div>
  );
};
