import React , {Component} from 'react';
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Message from "./components/message"
import Counter from './components/counter'  
import FunctionClick from "./components/functionclick" 
import Classclick from "./components/classclick"
  class App extends Component   {
      constructor(props){
        super(props)
        this.state = {
          msg: 'ffff' ,
          digit: 100
        }
    }
    render()
    {

      
      return (


          <div className="App">
          {this.state.msg}
          <Greet name="Robert" superhero ="Iron-MAN" >
          <p>hELLO</p>
          </Greet>
          <h2>{this.state.digit}</h2>
          <Greet name="Bruce" superhero ="Batman" >
          <button>action</button>
          </Greet>
          <Greet name="Gal Gadot" superhero ="Wonder Woman" />
          <Message changeValueMessage={(digit) => this.setState({digit})} message = {this.state.msg}/>
          <Counter onChangeValue={(msg) => this.setState({msg})}/>
          <br>

          </br>
          <FunctionClick/>
          <Classclick/>
          <br>


          </br>
          <classclick/>
          </div>
      );
    }
  }

  export default App;
