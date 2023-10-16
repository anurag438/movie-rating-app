import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
     <Header/>
     <div className="container">
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/movie/:imdbID' Component={MovieDetail}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
     </div>
     <Footer/>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
