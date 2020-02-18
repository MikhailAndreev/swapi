import React, {Component} from 'react';

import {Link} from "react-router-dom";
import '../FilmInfo/FilmInfo.scss';
import axios from '../../utils/axios-films';
import WithClass from '../../hoc/withClass';


class FilmInfo extends Component {
  state = {
    data: [],
    dataStarships: [],
    error: false
  };

  fetch = () => {
    axios
      .get(`/1`, {
        params: {},
      })
      .then((response) => {
        this.setState(prevState => ({
          data: response.data,
          dataStarships: response.data.starships,
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

  componentDidUpdate() {
    console.log(this.state.data)
  }


  render() {
    const renderLinkList = this.state.dataStarships.length > 0 && this.state.dataStarships.map((starShip, index) => {
      const linkId = starShip.match(/\d+/g).map(Number);
      return (
        <Link key={index} to={`${'/starship/'}${linkId}`}>
          {starShip}
        </Link>
      )
    });

    return (
      <WithClass classes='sw-films'>

        {this.state.dataStarships.length < 1 && !this.state.error &&
        < div className="spinner-border extra-margin" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        }

        {this.state.dataStarships.length > 0 &&
        <WithClass classes='sw-films'>
          <p>
            {this.state.data.title}
          </p>
          <p className='opening'>
            {this.state.data.opening_crawl}
          </p>
          <p>
            List of starships:
          </p>

          {renderLinkList}

        </WithClass>
        }

        {this.state.dataStarships.length < 1 && this.state.error &&
        <p>
          something went wrong
        </p>
        }

      </WithClass>
    );
  }
}

export default FilmInfo;