import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import GifList from '../GifList/GifList';
import SearchGif from '../SearchGif/SearchGif';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleMaps from '../googleMaps/GoogleMaps';

function App(props) {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
        <h1>Giphy Search!</h1>
        <Route path="/" exact>
          <SearchGif />
        </Route>
        <Route path="/favorites" exact>
          <GifList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
