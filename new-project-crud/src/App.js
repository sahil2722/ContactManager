import React, { Component } from "react";
import "./App.css";
import Contacts from "./component/Contacts/Contacts";
import Header from "./component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from './Context'
import AddContact from './component/Contacts/AddContact'
import { HashRouter as Router ,Route , Switch } from 'react-router-dom'
import About from './component/Pages/About'
import NotFound from "./component/Pages/NotFound";
import Test from './component/testComponent/Test';
import EditContact from './component/Contacts/EditContact';

 
 
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/> 
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>                
            </div>
          </div>
        </Router>        
      </Provider>
    );
  }
}

export default App;