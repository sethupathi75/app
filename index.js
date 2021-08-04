import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom';
import './index.css';
import User from './user'
import Asses from './asses';
class App extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         data:{}
      };
  
      this.data1=[]
    };
    
  
   
    render() {
      return (
        <div> 
          <Router>
         
              
              <Route exact path='/' component={Asses}  />
              <Route  path='/user/:id/:name' component={User}  />
              
          </Router>
        </div>
      );
    }
  }
  
  
  
  ReactDOM.render(<App />,document.getElementById('root'));
  