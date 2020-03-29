import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Beers from './Beers'
import Bucket from './Bucket'

import { Button } from 'reactstrap';
import './BeersData.css'

const BeersData = () => {

  const [beers, setBeers] = useState([])
  const [isFilterByAbv, setIsFilterByAbv] = useState(false)
  const [bucket, setBucket] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then(res =>
        setBeers(res.data),
      );
  }, []);

  const sortByAbv = () => {
    setIsFilterByAbv(!isFilterByAbv)
  }

  const handleClick = (e) => {
    setBucket()
    console.log(bucket);

  }

  const divAbv = () => {
    return (
      <div>
        {/* --------------- FILTER BY ABV > 8 -------------------*/}
        {isFilterByAbv
          ?
          <div className="container-fluid">
            <div className="row">

              {beers
                .filter(beer => beer.abv > 8)
                .map((beer, i) =>
                  <Beers
                    beer={beer}
                    handleClick={handleClick}
                    index={i}
                    bucket={bucket}
                  />
                )}
            </div>
          </div>

          // {/* --------------- FILTER ABV OFF -------------------*/}
          :
          <div className="container-fluid">
            <div className="row">

              {beers.map((beer, i) =>
                <Beers
                  beer={beer}
                  handleClick={handleClick}
                  index={i}
                  bucket={bucket}
                />
              )}
            </div>

          </div>
        }
      </div>
    )
  }

  return (
    <div>
      <div className="buttonsContainer">
        {/* -------------------SORT BY ABV BUTTON------------------- */}
        <button id="filterButton2" class="btn btn-success" onClick={e => sortByAbv()}>
          {isFilterByAbv ? 'Retour à toutes les bières' : 'Filtrer par ABV > à 8°'
          }
        </button>
      </div>
      <div>
        {divAbv()}
      </div>

    </div >
  )
}

export default BeersData