import React , {Component} from 'react';

class Message extends Component{
   
   constructor(props){
      super(props)
      this.state = {
         message: "Welcome Visitors" 
      }
   }

   changeMessage(){
      this.setState({
         message:"I am using set state"
      })
   }

   render() {
      return(
         <div>
            <h1>{this.state.message} </h1>
            
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            <button onClick={()=> this.props.changeValueMessage(6)}>I will change the value</button> }
            {this.props.children}
         </div>
      )
   }
}

export default Message