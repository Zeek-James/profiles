import React from "react";

export const Details = ({ post, close }) => {
  return (
    <div className={!close ? "close" : "profile_Block"}>
      <div className="domain_Name">
        Domain:
        <span>{post.DomainName}</span>
      </div>
      <div className="phone">
        Phone: <span>{post.PhoneNumber}</span>
      </div>
      <div className="mac_Address">
        {" "}
        Address: <span>{post.MacAddress}</span>
      </div>
      <div className="ema_l">
        <a href="https://zeek-james.github.io/My-Portfolio/" className="email">
          <span className="link">Click me:</span> {post.Email}
        </a>
      </div>
      <div className="URL"> {post.URL}</div>
      <div className="geo">
        <h4>Co-ordinate</h4>
        <div className="co_ord">
          <div className="lat">
            Lat: <span>{post.Latitude}</span>
          </div>
          <div className="long">
            Long: <span>{post.Longitude}</span>
          </div>
        </div>
        <div className="pay_Mtd">
          Payment Method: <span>{post.PaymentMethod}</span>
        </div>
      </div>
    </div>
  );
};
