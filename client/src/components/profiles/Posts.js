import React, { useState } from "react";
import { Profile } from "./profile/Profile";

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

import "./posts.css";

export const Posts = ({ posts, loading }) => {
  // const [detail, setDetail] = useState(false)

  // const toggle = () => setDetail(false)

  if (loading) {
    return <Loader type="Puff" color="#00BFFF" height={80} width={80} className='spinner' />
  }
    
  return (
      <div >
    <div className="profile_Container">
        {posts.map((post) => (
          <Profile key={post.CreditCardNumber} className='profile'
            // {detail ? 'profile' : "ext"}
            post={post} />
        ))}
      </div>
    </div>
  );
};
