import React from 'react'
import MoviesData from '../MoviesData'

function Movies () {
  return (
    <>
    <div>
        <div className='container'>
            <div className='row'>
                <h1 className='text-center my-5'>Top Rated Movies</h1>
                {
                    MoviesData.map((cval)=>{

                        return(
                            <>
                            <div className='col-md-4 mt-1'>

                                <div class="card" style={{width:"18rem"}}>
                                    <img src={cval.cover} class="card-img-top" alt='...'/>
                                    <div class="card-body">
                                        <h5 class="card-title">{cval.name}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p><b>Ratings:</b>{cval.ratings}</p>
                                        <a href={cval.link} class="btn btn-primary">Watch now</a>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>

    </>
  
  )
}

export default Movies;