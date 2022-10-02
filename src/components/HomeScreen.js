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
      <Row title="Tops Da Semana" fetchUrl={Request.fetchTrending} isLargeRow />
    </div>
  );
}

export default HomeScreen;
