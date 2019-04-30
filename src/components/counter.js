import React, { Component } from 'react'
import ReactDOM from "react-dom"

    class Counter extends Component {
        
        constructor(props){
            super(props)
            this.state = {
                count: 0 
            }
        }

         increment(){
            
           /*  this.setState({
                count: this.state.count + 1
            },() => {console.log(this.state.count)
            })
            console.log("counter vaue is" , this.state.count) */
            this.setState((prevState) => ({
                                            count: prevState.count + 1
            }))
                
        }
        IncrementFive(){
                        this.increment();
                        this.increment();
                        this.increment();
                        this.increment();
                        this.increment();

        }



        render() {
            return (
                <div>
                    <div>Count - {this.state.count}</div>
                    <button onClick = {()=> this.IncrementFive() } > Incrementing value </button>
                    <button onClick = {()=> this.props.onChangeValue('cgangfff') } > Incrementing value </button>
                </div>
            )
        }
    }

export default Counter
