import React, {Component} from 'react';

import axios from '../../utils/axios-films';
import WithClass from '../../hoc/withClass';


class StarShipInfo extends Component {
  state = {
    data: null,
    loading: false,
    error: false
  };

  fetch = () => {
    axios
      .get(`${'https://swapi.co/api/starships/'}${this.props.match.params.id}`, {
        params: {},
      })
      .then((response) => {
        this.setState(prevState => ({
          data: response.data,
        }));
      })

      .catch(() => {
        this.setState({
          error: true,
        });
      });
  };

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <WithClass classes='sw-films'>
        <p>
          Page with current starship
        </p>
        {this.state.data === null && !this.state.error &&
        < div className="spinner-border extra-margin" role="status">
          <span className="sr-only">Loading...</span>
          </div>
        }

        {this.state.data !== null && !this.state.error &&
        <WithClass classes='sw-films'>
          <p>
            Ship name: {this.state.data.name}
          </p>
          <p>
            Ship model: {this.state.data.model}
          </p>
          <p>
            passengers: {this.state.data.passengers}
          </p>
        </WithClass>
        }
        {this.state.data === null && this.state.error &&
        <p>
          something went wrong
        </p>
        }

      </WithClass>
    );
  }
}

export default StarShipInfo;