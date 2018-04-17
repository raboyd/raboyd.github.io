import React, { Component } from 'react';
import './App.css';
import FilterDropDown from './FilterDropDown';

class App extends Component {

  constructor(){
    super();
    this.state = {
      characters: [],
      hairColours: [],
      skinColours: [],
      eyeColous: [],
      hairFilter: ''
    }
  }

  onHairColourFilterChange = (event) => {
    this.setState({hairFilter: event.target.value});
    console.log(event.target.value);
  }

  async componentDidMount(){
    const rawData = await fetch('https://swapi.co/api/people/');
    const jsonData = await rawData.json();
    this.setState({ hairColours: [...new Set(jsonData.results.map(character => character.hair_color))]});
    this.setState({ skinColours: [...new Set(jsonData.results.map(character => character.skin_color))]});
    this.setState({ eyecolours: [...new Set(jsonData.results.map(character => character.eye_color))]});    
    this.setState({ characters: jsonData.results });
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">World of Star Wars</h1>
        <hr/>

          <FilterDropDown filterName="hair_color" filterOptions={this.state.hairColours} filterChange={this.onFilterChange} />


        <hr/>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
          }}>
          <div className="pa5">
            <p>Card</p>
          </div>
          <div className="pa5">
            <p>Card</p>
          </div>
          <div className="pa5">
            <p>Card</p>
          </div>
          <div className="pa5">
            <p>Card</p>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
