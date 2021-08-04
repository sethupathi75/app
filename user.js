import React, { Component } from 'react';
import Nav from './nav'
class User extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       datas:'',
       phonetic:'',
       meaning:'',
       user_data:'',
       partofspeech:'',
       definition:'',
       example:''
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

click=()=>{
  if (this.props.match.params.name==='phonetic'){
  
    this.setState({user_data:this.state.phonetic[this.props.match.params.id]})
  }
  else{
  this.setState({partofspeech:this.state.meaning[this.props.match.params.id]['partOfSpeech'],definition:this.state.meaning[this.props.match.params.id]['definitions'][0]['definition'],example:this.state.meaning[this.props.match.params.id]['definitions'][0]['example']})
  
}
          
      }

  render() {
    var list=[]
    list.push(<div>
      <ul className="list-group">
        <li className="list-group-item list bg-primary list-group-item-action text-white text-center">phonetic data</li>
      </ul>
      </div>)
    for (var i in this.state.user_data ){
        list.push(<div>
          <ul className="list-group">
            <li className="list-group-item list list-group-item-action"><strong>{i}</strong>  :  {this.state.user_data[i]}</li>
          </ul>
          </div>)
    }

    var list1=[]
    list1.push(<div>
      <ul className="list-group">
        <li className="list-group-item list list-group-item-action bg-primary text-white text-center">meaning data</li>
      </ul>
      </div>)
        list1.push(<div>
          <ul className="list-group">
            <li className="list-group-item list list-group-item-action"><strong>partofspeech:  </strong>   {this.state.partofspeech}</li>
            <li className="list-group-item list list-group-item-action"><strong>example:  </strong>    {this.state.example}</li>
            <li className="list-group-item list list-group-item-action"><strong>definition:  </strong>   {this.state.definition}</li>
          </ul>
          </div>)
    

    return (
      <div> 
        <Nav />
        <div className="container mt-5">
          
          <div className="row">
            <div className='col-6'>
            
            {
                list
            }
            
            </div>
          

          
            <div className='col-6'>
            <div>
          {
            list1
          }
        </div>
            </div>
            </div>
            <div className="row p-5">
              <p className='text-danger'>*PLASE PRESS SHOW DETAILS BUTTON</p>
          <button onClick={this.click} className=" btn offset-5 btn-success btn-center">show details</button>
          </div>
        </div>
        
        
        
        
      </div>
    );
  }
}

export default User;
