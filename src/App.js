import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor() {
     super()
     this.state = {
      keep: 0,
      words:0,
      set:false,
      text: ""
     }
   }

    textChange (event) {
      this.setState({ text: event.target.value })
      if (this.state.set === false) {
         this.setState({
            keep: event.target.value.length,
            words: this.wordCount(event.target.value),
         })
      }
    }
    wordCount (text) {
    	var arr = text.split(" ");
      return arr.reduce(function(count, item) {
        if (item.length > 0) { count++; }
      	return count;
      }, 0);
    }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.textChange.bind(this)}></textarea>
        <div className="counter">{this.state.keep}</div>
      </div>
    );
  }
}

export default App;
