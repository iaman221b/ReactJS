import React, { Component } from 'react'

 class Classclick extends Component {
      clickHandler() {
                                  console.log("Button Clicked")
       }
        render() {
        return (
      <div>
        <button onClick ={this.clickHandler}>Class CliCK</button>
      </div>
    )
  }
 }

export default Classclick
