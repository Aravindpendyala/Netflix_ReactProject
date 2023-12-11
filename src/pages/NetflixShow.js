import React from 'react'
import Row from '../components/Row/Row'
import api from '../apii/api'
import Banner from '../components/Banner/Banner'

const NetflixShow = () => {
  return (
    <div>
      <Banner/>
         <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
         <Row title="Trending Now" fetchUrl={api.fetchTrending} />
         <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={api.fecthActionMovies} />
         <Row title="Comedy Movies" fetchUrl={api.fecthComedyMovies} />
         <Row title="Horror Movies" fetchUrl={api.fecthHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={api.fecthRomanceMovies} />
         <Row title="Documnentaries" fetchUrl={api.fecthDocumentaries} />
        </div>
  )
}

export default NetflixShow