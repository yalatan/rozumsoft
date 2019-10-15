import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import myCoord from './api/endpoint.json';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './App.css';
import Form from './components/Form';






///////////////////////
const MapYan = (mapData, coorS) => (
       
  <YMaps>
    <Map state={mapData}  width={'100%'} height={'100%'}>
            {coorS.map(el => el.coodrs.split(',')).map(coordinate => <Placemark geometry={coordinate} />)}
          </Map>
  </YMaps>
)
const ListCoord = (coorS) => (
<ul className="list">{coorS.map(el => 
                <li  className="list--item" onClick={((e) => handleClick(e))} >{el.name}</li>)}</ul>
)

///////////////////////////////////
const Tick2 = (myCoord, centerMap)=> {
  const coorS = myCoord.points;
  const mapData = {
    center: centerMap,
    zoom: 10, behaviors: "disable('drag')"
  }
  const myMap = MapYan(mapData, coorS);
  const myCoordinates = ListCoord(coorS);
  const element = (
    <React.Fragment>
    <div className="container" >
    <div className="container--map   ">{myMap}</div>   
    <div className = "container--item"> {myCoordinates} </div>         

</div>  
</React.Fragment>     
);
  ReactDOM.render(element, document.getElementById('root3'));
}

setInterval(Tick2(myCoord, ["52.424160", "31.014272"]), 3000);

function handleClick(e){
  document.querySelectorAll('.list--item').forEach(
    item => item.classList.remove('active')
  );
  e.target.classList.add('active');
  const index = myCoord.points.map(e =>e.name.toUpperCase()).indexOf(e.target.innerText.toUpperCase());
  const myCenter = myCoord.points[index].coodrs.split(',');
  Tick2(myCoord, myCenter);

}
////////////////////////////////////
function tick() {
    const element = (
      <div className="header">
        <h4>Have a good day, Rozumsoft!</h4>
        <h5>Now: {new Date().toLocaleTimeString()}.</h5>
      </div>
      
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<Form/>, document.getElementById('root2'));

