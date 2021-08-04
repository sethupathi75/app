import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom';
import Nav from './nav'
class Asses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         datas:'',
         phonetic:'',
         meaning:'',
         
      };
    };


    componentDidMount(){

        var request=new XMLHttpRequest();
    request.open("GET","https://api.dictionaryapi.dev/api/v2/entries/en_US/hello",true);
    request.send();
    request.onload=()=>{
        var data=JSON.parse(request.response)
        console.log(data)
        this.setState({datas:data,phonetic:data[0]['phonetics'],meaning:data[0]['meanings']})
    }
        
    }

  render() {
   
    
    return (
    <div>
        <Nav />
        <div className="container mt-5">
            <div className="row offset-5">
                <ul className="list-group">
                {
                    this.state.phonetic.length?
                    this.state.phonetic.map(
                    (e)=><li className="list-group-item"><a  href={`/user/${this.state.phonetic.indexOf(e)}/phonetic`}><button className="btn btn-primary"   onClick={this.click}>phonetics {this.state.phonetic.indexOf(e)}</button></a>  </li>
                    ):null
                }
                {
                    this.state.meaning.length?
                    this.state.meaning.map(
                    (e)=><li className="list-group-item "><a  href={`/user/${this.state.meaning.indexOf(e)}/meaning`}><button className="btn btn-primary"   onClick={this.click}>meanings {this.state.meaning.indexOf(e)}</button></a></li>
                    ):null
                }
                </ul>
            </div>
        </div>
        
    </div>
    );
  }
}

export default Asses;
