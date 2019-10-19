import React from "react";
import myCoord from '../../api/endpoint';
import YandexMap from "../YandexMap";

class YandexMapPoints extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: myCoord.points[0].coodrs.split(', ')
    }
  }

  render() {
    console.log(myCoord);
    return (
      <div className="container">
        <div className="container--map">
          <YandexMap center={this.state.center} />
        </div>
        <div className="container--item">
          <ul className="list">
            {myCoord.points.map(item => (
              <li
                key={item.name}
                className="list--item"
                onClick={() => this.setState({center: item.coodrs.split(', ')})}
              >{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default YandexMapPoints;
