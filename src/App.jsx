import React, { Component } from 'react';

class App extends Component {
  
  async componentDidMount() {
    const url = "https://content.viaplay.se/pc-se/serier/samtliga"
    const response = await fetch(url)
    const data = await response.json()
  }

  render() {
    return (
    )
  }
}
export default App;
