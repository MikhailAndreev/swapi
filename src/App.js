import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import FilmInfo from "./components/FilmInfo";
import StarShipInfo from "./components/StarShipInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={FilmInfo}/>
          <Route path='/starship/:id' exact component={StarShipInfo}/>
        </Switch>
      </div>
    );
  }
}

export default App;

