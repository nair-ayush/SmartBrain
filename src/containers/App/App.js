import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import './App.css';

import Navigation from '../../components/Navigation/Navigation';
import SignIn from '../../components/SignIn/SignIn';
import Logo from '../../components/Logo/Logo';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import Rank from '../../components/Rank/Rank';
import Register from '../../components/Register/Register';

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
            box: '',
            route: 'signIn',
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
            }
        };
    }
    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name:data.name,
                email: data.email,
                entries:data.entries,
                joined: data.joined
        }})
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
            .then(response => {
                if (response) {
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            id: this.state.user.id
                        })
                    }).then(response => response.json()).then(count => {
                        this.setState(Object.assign(this.state.user, {entries: count}))
                    });
                }
                this.displayBox(this.findFace(response))
            })
            .catch(err => console.log(err))
    }
    onRouteChange = (route) => {
        this.setState({route: route});
    }
    render() {
        const { imageURL, box, route} = this.state;
        switch (route) {
            case 'register':
                return (
                    <div className="App">
                        <Particles className='particles' params={particleParameters}/>
                        <Navigation onRouteChange={this.onRouteChange} page={route}/>
                        <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                    </div>
                )
            case 'signIn': 
                return (
                    <div className="App">
                        <Particles className='particles' params={particleParameters}/>
                        <Navigation onRouteChange={this.onRouteChange} page={route}/>
                        <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                    </div>
                )
            case 'home':
                return (
                    <div className="App">
                        <Particles className='particles' params={particleParameters}/>
                        <Navigation onRouteChange={this.onRouteChange} page={route}/>
                        <Logo />
                        <Rank name={this.state.user.name} entries={this.state.user.entries} />
                        <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
                        <FaceRecognition box={box} imageURL={imageURL}/>
                    </div>
                )
            default:
                break;
        }
    }
}

export default App;
