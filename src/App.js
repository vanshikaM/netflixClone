import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';  

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner fetchUrl = {request.fetchNetflixOriginals}/>
    <Row title="Netflix original" fetchUrl = {request.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending Now" fetchUrl = {request.fetchTrending}/>
    <Row title="Action Movies" fetchUrl = {request.fetchActionMovies}/>
    <Row title="Top Rated" fetchUrl = {request.fetchTopRated}/>
    <Row title="Horror Movies" fetchUrl = {request.fetchHorrorMovies}/>
    <Row title="Comedy Movies" fetchUrl = {request.fetchComedyMovies}/>
    <Row title="Documentries" fetchUrl = {request.fetchDocumentries}/>
    <Row title="Romance Movies" fetchUrl = {request.fetchRomanceMovies}/>

    </div>
  );
}

export default App;
