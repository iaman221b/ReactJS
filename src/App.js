import React , {Component} from 'react';
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Message from "./components/message"
class App extends Component   {
 render()
 {

  
  return (


    <div className="App">
    
     <Greet name="Robert" superhero ="Iron-MAN" >
     <p>hELLO</p>
     </Greet>
     
     <Greet name="Bruce" superhero ="Batman" >
     <button>action</button>
     </Greet>
     <Greet name="Gal Gadot" superhero ="Wonder Woman" />
     <Message />
    </div>
  );
 }
}

export default App;
