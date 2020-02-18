import React, {Component} from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom';

import FilterApp from "./containers/FilterApp";
import * as staticData from './assets/static-data';
import FilmPage from "./containers/FilmPage";
import FilmInfo from "./components/pages/FilmInfo";
import StarShipInfo from "./components/pages/StarShipInfo";

const getAddress = () => {
  console.log(staticData.filmsList)
};

class App extends Component {

  componentDidMount() {
    getAddress();
  }

  render() {
        return(
            <div>
                <Switch>
                    {/*<Route path='/film'  component={FilmPage}/>*/}
                    {/*<Route path='/' exact component={FilterApp}/>*/}
                    <Route path='/' exact component={FilmInfo}/>
                    <Route path='/starship/:id' exact component={StarShipInfo}/>
                </Switch>
            </div>
        );
    }
}

export default App;

