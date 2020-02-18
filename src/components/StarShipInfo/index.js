import React, {Component} from 'react';
import {connect} from 'react-redux';


import '../../../containers/FilterApp/FilterApp.scss';
import axios from '../../../utils/axios-films';
import WithClass from '../../../hoc/withClass';


class StarShipInfo extends Component {
  state = {
    data: [],
  };

  fetch = () => {
    axios
      .get(`${'https://swapi.co/api/starships/'}${this.props.match.params.id}`, {
        params: {},
      })
      .then((response) => {
        this.setState(prevState => ({
          loading: false,
          data: response.data,
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
    console.log(this.props)
    console.log(this.props.location.pathname)
  }

  componentDidUpdate() {
    console.log(this.state.data)
  }


  render() {
    return (
      <WithClass classes='sw-films'>
        <p>
          Page with current film
        </p>

        <p>
          Ship name: {this.state.data.name}
        </p>
        <p>
          passangers: {this.state.data.passengers}
        </p>
      </WithClass>
    );
  }
}

export default StarShipInfo;