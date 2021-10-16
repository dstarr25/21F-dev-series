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
  const navItems = [{name: "Home", address: "/"},{name: "Demos", address: "/demos"},{name: "Blank", address: "/blank"}];
  

  return (
    <div className="App">
      <Router>
      <h1 className="title">Welcome to the <i>wowful website</i> by Devon Starr</h1>
      <h2 className="littleComment">How u doin?</h2>
      <div className="ListContainer" >
        {
          navItems.map((item, i) => {
            return(
              <Link className="navitem" to={navItems[i].address}>Click here to go to {navItems[i].name} page</Link>
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

          <Route path="/blank">
            <h1 className="ListHeader">Get pranked this page isn't even blank</h1>
            <div className="littleComment"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Consequat id porta nibh venenatis cras. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. In nibh mauris cursus mattis. Porttitor leo a diam sollicitudin tempor id eu nisl. Sed enim ut sem viverra aliquet eget. Vitae turpis massa sed elementum tempus. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Nulla facilisi morbi tempus iaculis urna id volutpat. Non enim praesent elementum facilisis leo vel fringilla est. Leo urna molestie at elementum eu facilisis. Turpis massa tincidunt dui ut. Risus sed vulputate odio ut enim. Adipiscing bibendum est ultricies integer quis auctor elit sed. Donec adipiscing tristique risus nec. Turpis egestas pretium aenean pharetra magna ac. Eget nullam non nisi est sit amet facilisis.

                                    Neque convallis a cras semper auctor neque vitae tempus. Pellentesque elit ullamcorper dignissim cras. Auctor elit sed vulputate mi sit amet. Ac auctor augue mauris augue neque. Sed vulputate mi sit amet mauris. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Viverra suspendisse potenti nullam ac tortor. Euismod nisi porta lorem mollis. In ante metus dictum at tempor commodo. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Et netus et malesuada fames. Adipiscing vitae proin sagittis nisl rhoncus. Duis tristique sollicitudin nibh sit amet commodo. Nulla porttitor massa id neque aliquam vestibulum. Massa eget egestas purus viverra accumsan in. Sed id semper risus in hendrerit gravida rutrum quisque.

                                    Sit amet justo donec enim diam vulputate. Ipsum faucibus vitae aliquet nec. Pharetra et ultrices neque ornare aenean euismod elementum. Ultricies tristique nulla aliquet enim tortor at. Scelerisque in dictum non consectetur a erat nam at lectus. Vestibulum sed arcu non odio euismod lacinia at quis. Ut porttitor leo a diam sollicitudin. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Aliquet risus feugiat in ante. Id semper risus in hendrerit gravida. Dui vivamus arcu felis bibendum ut tristique. Mi bibendum neque egestas congue quisque egestas diam. Sed risus pretium quam vulputate. Convallis tellus id interdum velit laoreet id. Rhoncus dolor purus non enim praesent elementum facilisis. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Duis tristique sollicitudin nibh sit amet commodo. Malesuada fames ac turpis egestas integer eget aliquet nibh.

                                    Faucibus et molestie ac feugiat sed lectus vestibulum. Sed velit dignissim sodales ut eu sem. Vehicula ipsum a arcu cursus vitae congue mauris. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Augue ut lectus arcu bibendum at. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Tortor id aliquet lectus proin nibh nisl. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. A scelerisque purus semper eget duis at tellus at. Sapien pellentesque habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus elementum sagittis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. A arcu cursus vitae congue. Volutpat blandit aliquam etiam erat velit. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Convallis a cras semper auctor neque vitae. Turpis in eu mi bibendum neque egestas.

                                    Id neque aliquam vestibulum morbi blandit. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Tortor id aliquet lectus proin nibh nisl condimentum. Nunc non blandit massa enim nec. Faucibus pulvinar elementum integer enim. Nunc lobortis mattis aliquam faucibus purus. Aliquam sem et tortor consequat id porta nibh venenatis cras. Eget duis at tellus at urna condimentum mattis pellentesque id. Augue ut lectus arcu bibendum at varius vel pharetra. Tempor nec feugiat nisl pretium fusce id velit ut. Enim sed faucibus turpis in.

                                    Sapien et ligula ullamcorper malesuada proin. Curabitur gravida arcu ac tortor dignissim convallis. Et netus et malesuada fames ac turpis. Elit at imperdiet dui accumsan sit amet. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Feugiat in fermentum posuere urna. Odio euismod lacinia at quis. Adipiscing tristique risus nec feugiat in fermentum. Nisi est sit amet facilisis magna etiam tempor. Risus at ultrices mi tempus. Massa tincidunt dui ut ornare lectus sit. Faucibus ornare suspendisse sed nisi lacus. Tellus molestie nunc non blandit massa. Elit eget gravida cum sociis natoque penatibus et magnis dis.

                                    Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Pellentesque habitant morbi tristique senectus et netus. Elementum integer enim neque volutpat ac. Gravida rutrum quisque non tellus orci ac auctor. Proin fermentum leo vel orci porta non pulvinar. Vel eros donec ac odio tempor. Rhoncus mattis rhoncus urna neque. Congue quisque egestas diam in arcu cursus euismod. Aliquam malesuada bibendum arcu vitae. Posuere morbi leo urna molestie at elementum eu facilisis. Vitae ultricies leo integer malesuada. Faucibus a pellentesque sit amet. Mauris sit amet massa vitae tortor condimentum.

                                    Parturient montes nascetur ridiculus mus. Ornare quam viverra orci sagittis eu volutpat. Quisque non tellus orci ac auctor. Lacus viverra vitae congue eu consequat ac felis donec et. Netus et malesuada fames ac. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Massa vitae tortor condimentum lacinia quis vel. Suspendisse ultrices gravida dictum fusce. Sit amet porttitor eget dolor morbi non arcu risus. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum sit amet justo donec. Velit dignissim sodales ut eu sem integer. Aliquam eleifend mi in nulla. Scelerisque eu ultrices vitae auctor eu augue ut. Justo eget magna fermentum iaculis eu. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Viverra nam libero justo laoreet sit amet cursus sit. Tristique senectus et netus et malesuada fames.

                                    Cras ornare arcu dui vivamus arcu felis. Pellentesque habitant morbi tristique senectus. Arcu dui vivamus arcu felis bibendum ut. Felis donec et odio pellentesque. Congue nisi vitae suscipit tellus. Urna neque viverra justo nec ultrices dui sapien. Amet mauris commodo quis imperdiet massa. Orci dapibus ultrices in iaculis. Tellus id interdum velit laoreet id donec ultrices. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Aenean pharetra magna ac placerat vestibulum. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Dapibus ultrices in iaculis nunc. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Netus et malesuada fames ac turpis egestas maecenas.

                                    Dignissim enim sit amet venenatis urna cursus eget nunc. Nulla facilisi nullam vehicula ipsum a. Id diam vel quam elementum pulvinar. Et ultrices neque ornare aenean euismod. Neque sodales ut etiam sit amet nisl. Volutpat odio facilisis mauris sit amet massa. Mi in nulla posuere sollicitudin aliquam. Nunc consequat interdum varius sit amet mattis. Egestas integer eget aliquet nibh praesent tristique magna sit. Vitae ultricies leo integer malesuada nunc vel risus. Aliquam vestibulum morbi blandit cursus risus. Quis vel eros donec ac. Consectetur a erat nam at lectus. Commodo nulla facilisi nullam vehicula ipsum. Tincidunt dui ut ornare lectus sit. Hendrerit gravida rutrum quisque non. Ultrices vitae auctor eu augue ut. Proin fermentum leo vel orci porta non pulvinar. Mi ipsum faucibus vitae aliquet nec.</div>
          </Route>

          <Route path="/">
            <img id="myPhoto" src="hey.jpg" alt="me" height={rando}/> <br/>
            <a href="https://www.coolmathgames.com/"><button className="coolButton">Click for cool site!</button></a>
            <p className="littleComment">Try decreasing the width of your browser! Something crazy will happen.</p>
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
