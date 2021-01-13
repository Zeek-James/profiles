import React from 'react'

export const Main = ({post}) => {
    return (
<div
          className='profile_front'
          // className={!profileDetails ? "slide" : "profile_front"}
        >
          <p className="user_Name">{post.UserName}</p>

          <div className="profile_fadeTop" />
          <div className="name">
            <div className="first_Name">
              {post.FirstName} <span>FirstName</span>
            </div>
            <div className="last_Name">
              {post.LastName} <span>LastName</span>
            </div>
          </div>
          <h4 className="gender">
            Gender: <span>{post.Gender}</span>
          </h4>

          <div className="credit_Card">
            <h4 className="card_Header">Credit-Card</h4>
            <div className="card_Details">
              <h5>
                Card-Number: <span>{post.CreditCardNumber}</span>
              </h5>
              <h5>
                Card-Type: <span>{post.CreditCardType}</span>
              </h5>
            </div>
          </div>

          <div className="last_Login">
            Last seen
            <span>: {post.LastLogin}</span>
            </div>
            
          <div className="profile_fadeBtm" />
        </div>
    )
}
