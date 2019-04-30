import React , {Component} from 'react';
import ReactDOM from "react-dom"

class Greet extends Component {
   render() {
      return(
            <div>
               <h1>This is {this.props.name} Component a.k.a {this.props.superhero} </h1>
               {this.props.children}
         </div>
      )
   }
}
export default Greet;