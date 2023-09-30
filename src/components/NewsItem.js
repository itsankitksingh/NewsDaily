import React, { Component } from 'react'

const NewsItem = (props) => {

  let { title, description, imageurl, newsurl } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img-top" src={!imageurl ? "https://www.masflair.com/wp-content/themes/consultix/images/no-image-found-360x250.png" : imageurl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl}  /*target="_blank"*/ className="btn btn-sm btn-dark">Read More..</a>
        </div>
      </div>
    </div>
  )

}
export default NewsItem