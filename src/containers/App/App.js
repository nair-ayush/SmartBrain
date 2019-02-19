import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import './App.css';

import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import Rank from '../../components/Rank/Rank';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';

const particleParameters = {
    particles: {
        number: {
            value: 30,
            density: {enable: true, value_area: 300}
        }
    }
};

const app = new Clarifai.App({
    apiKey: '61e34b186fda458494bc6aa8f68598af'
    });

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageURL: '',
            box: ''
        };
    }
    findFace = (data) => {
        const location = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: location.left_col * width,
            topRow: location.top_row * height,
            rightCol: width - (location.right_col * width),
            bottomRow: height - (location.bottom_row * height)
        }
    }
    displayBox = (box) => {
        console.log(box);
        this.setState({box: box});
    }
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }
    onDetect = () => {
        this.setState({imageURL: this.state.input});
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayBox(this.findFace(response)))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="App">
                <Particles className='particles' params={particleParameters}/>
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
                <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
            </div>
        );
    }
}

export default App;
