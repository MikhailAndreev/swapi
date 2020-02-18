import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from "react-router-dom";
import '../../../containers/FilterApp/FilterApp.scss';
import axios from '../../../utils/axios-films';
import WithClass from '../../../hoc/withClass';


class FilmInfo extends Component {
  state = {
    count: 15,
    filmTitle: '',
    data: [],
  };

  fetch = () => {
    axios
      .get(`/1`, {
        params: {},
      })
      .then((response) => {
        this.setState(prevState => ({
          loading: false,
          data: response.data.starships,
        }));
      })

      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate() {
    console.log(this.state.data)
  }


  render() {
    const renderLinkList = this.state.data.map((starShip, index) => {
      const linkId = starShip.match(/\d+/g).map(Number);
      return (
        // <p>
        //   {starShip}
        // </p>
        <Link key={index} to={`${'/starship/'}${linkId}`}>
          {starShip}
        </Link>
      )
    });
    return (
      <WithClass classes='sw-films'>
        <p>
          new Component will here
        </p>
        {renderLinkList}

      </WithClass>
    );
  }
}

export default FilmInfo;