import React from 'react';
import Slider from 'react-slick';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pagination from './routers/Pagination';
import Scroll1 from './routers/Scroll1';
import Scroll2 from './routers/Scroll2';
import Segment from './routers/Segment';
import Event2 from './routers/Event';
import Event3 from './routers/Event3';

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
          <Route path="/scroll1" exact component={Scroll1} />
          <Route path="/scroll2" exact component={Scroll2} />
          <Route path="/segment" exact component={Segment} />
          <Route path="/event" exact component={Event2} />
          <Route path="/event3" exact component={Event3} />
          <Redirect to="event"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
