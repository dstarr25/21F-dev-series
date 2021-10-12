//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import "./App.scss";

import ButtonExample from './components/buttonexample';
//import Form from './components/Form';
import ReduxComponent from './components/reduxComponent/index.js';

//what this returns is what we see on our browser.
function App() {
  let rando = Math.floor(Math.random() * 100) + 200;
  const things = ["Drinking lots of water", "Eating 3+ foco cookies per day", "Living the choate life","Running all over the place","Sleeping mucho", "Homeworking"];
  const lemonadeFlavors = ["Cherry", "Raspberry", "Strawberry", "Blueberry", "Lime", "Cucumber", "Mint"];
  const navItems = ["Home", "Demos"];
  

  return (
    <div className="App">
      <Router>
      <h1 className="title">Welcome to the <i>wowful website</i> by Devon Starr</h1>
      <h2 id="littleComment">How u doin?</h2>
      <div className="ListContainer" >
        {
          navItems.map((item, i) => {
            return(
              <Link className="navitem" to={`${item}`}>Click here to go to {`${item}`} page</Link>
            );
          })
        }
        {/* <div className="navitem">Click this button to go to the Home page</div>
        <div className="navitem">Click this button to go to the Demos page</div> */}
      </div>
        <Switch>
          <Route path="/demos">
          <h2 className="ListHeader">Increasing button using useState redux hook:</h2>
            <ButtonExample />
            <ReduxComponent />
          </Route>

          <Route path="/">
            <img id="myPhoto" src="hey.jpg" alt="me" height={rando}/> <br/>
            <a href="https://www.coolmathgames.com/"><button className="coolButton">Click for cool site!</button></a>
            <p id="littleComment">Not sure why but the above two elements were on the same line horizontally until I added &lt;br/&gt; inbetween them.</p>
            <h2 className="ListHeader">My life during the past few weeks:</h2>
            <div className="ListContainer">
            {
              things.map((thing, i) => {
                return(<div className="thing">{thing}</div>);
              })
            }
            </div>

            <h2 className="ListHeader">Best flavors of lemonade:</h2>
            <div className="ListContainer">
            {
              lemonadeFlavors.map((flavor, i) => {
                return(<div className="flavor">{i+1}) {flavor}</div>);
              })
            }
            </div>
            <h2 className="ListHeader">Throwback (click fidget spinner for a surprise):</h2>
            <a href="https://www.amazon.com/fidget-spinner/s?k=fidget+spinner"><img id="fidgetSpinner" src="https://thoughtsonprogramming.files.wordpress.com/2018/11/spinner.gif" alt="fidget spinner"/></a>
          </Route>
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
