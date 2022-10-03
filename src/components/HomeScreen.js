import React from 'react';
import '../components/HomeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Request from '../Requests';
import Row from '../components/Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={Request.fetchNetflixOriginals} isLargeRow />
      <Row title="Tops Da Semana" fetchUrl={Request.fetchComedyMovies} true />
      <Row title="Mais Votados" fetchUrl={Request.fetchTopRated} true />
      <Row title="Ação" fetchUrl={Request.fetchActionMovies} true />
      <Row title="Terror" fetchUrl={Request.fetchHorrorMovies} true />
      <Row title="Romance" fetchUrl={Request.fetchRomanceMovies} true />
      <Row title="Documentário" fetchUrl={Request.fetchDocumentaries} true />
    </div>
  );
}

export default HomeScreen;
