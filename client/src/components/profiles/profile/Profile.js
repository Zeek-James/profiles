import React, { useState } from "react";
import { Details } from "./Details";
import { Main } from "./Main";

import "./profile.css";

export const Profile = ({ post }) => {
  const [profileDetails, setProfileDetails] = useState(false);

  const toggle = () => setProfileDetails(!profileDetails);

  return (
    <div onClick={toggle}>

      <div className={profileDetails ? "display" : "list_GroupItem"}>
        <Main post={post} />
        <Details post={post} close={profileDetails} />
        <div className="profile_fadeBottom" />
      </div>
    </div>
  );
};
