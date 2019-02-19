import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Clarifai } from "clarifai";
import './App.css';

import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import Rank from '../../components/Rank/Rank';

const particleParameters = {
  particles: {
    number: {
      value: 30,
      density: {enable: true, value_area: 300}
    }
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      inputURL: ''
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onDetect = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleParameters}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
      </div>
    );
  }
}

export default App;
