// Team of the week: https://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject=%7B%22page%22:1,%22quality%22:%22totw_gold%22,%22position%22:%22GK%22%7D

import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Settings">
          <h2 className="Sub-title">Create your lineup!</h2>
          <SearchPlayer/>
          <Results/>
        </div>
        <Pitch/>
      </div>
    )
  }
}

class SearchPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    // Force method binding to React component
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  render() {
    return (
      <input
        className="Search-player"
        type="search"
        value={this.state.value}
        onChange={this.updateSearch}
        placeholder="Search for a player..."
      />
    )
  }
}

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <p>This is a result</p>
      </div>
    )
  }
}

class Pitch extends Component {
  render() {
    return (
      <div className="Pitch basic"></div>
    )
  }
}

export default App
