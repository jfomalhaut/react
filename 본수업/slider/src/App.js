import React from 'react';
import Slider from 'react-slick';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pagination from './routers/Pagination';

function App() {
  const setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoSpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="App">
      {/* <Slider {...setting}>
        <div className="slide slide1">
          <h1 className="number">1</h1>
        </div>
        <div className="slide slide2">
          <h1 className="number">2</h1>
        </div>
        <div className="slide slide3">
          <h1 className="number">3</h1>
        </div>
        <div className="slide slide4">
          <h1 className="number">4</h1>  
        </div>
        <div className="slide slide5">
          <h1 className="number">5</h1>
        </div>
      </Slider> */}
      <BrowserRouter>
        <Switch>
          <Route path="/list/:page" exact component={Pagination} />
          <Redirect to="list/1"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
