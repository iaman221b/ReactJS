import React , {Component} from 'react'
import ReactDOM from "react-dom"

class Greet extends Component {
   render() {
      const {name , superhero} = this.props
      // const{state1 , state2} = this.state
      return(
         <div>
            <h1>This is {name} Component a.k.a {superhero} </h1>
            {this.props.children}
         </div>
      )
   }
}
export default Greet