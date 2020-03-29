import React from 'react'
import './Beers.css'

const Beers = ({ bucket, beer, handleClick, index }) => {

  const toBucket = () => {
    bucket.push(index)
  }

  return (
    <div className="cardContainer">
      <div className="card my-4 mx-4 text-center">
        <img className="card-img-top" src={beer.image_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">{beer.tagline}</p>
          <p className="card-text">IBU : {beer.ibu} | ABV : {beer.abv}</p>
        </div>
      </div>
    </div>
  )
}

export default Beers
