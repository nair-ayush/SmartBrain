# SmartBrain

This is a face detection React App meant to learn React and Node using NPM and the Clarifai API.

## Links
* [Code](https://github.com/nair-ayush/SmartBrain)
* [Documentation]()
* [Website]()

## Roadmap

 - [X] Front end pages => Login, Home, Register
 - [X] Sync up the Clarifai App and visualise bounding box
 - [] Set up Node server
 - [] Connect Postgres database
 - [] Interlock all components with the API.
 - [] Deploy

## Usage

1. Signin/Login
    * Enter email and password to login or click on the register buttons to register and create an account.

2. Home
    * Enter the URL in the input box and press the Detect Button
    * The imag will display below the bar along with the bounding box detecting the face, if any.
    * Based on the number of users and the times you have detected faces, the app will give you a ranking of where you stand on the leaderboard.
3. Register
    * Fill the form and it will take you to the login page to signin.

## Dependencies

1. [Particles ^2.4.2](https://www.npmjs.com/package/react-particles-js)
2. [Tachyons ^4.11.1](https://www.npmjs.com/package/tachyons)
3. [Clarifai ^2.9.0](https://www.npmjs.com/package/clarifai)
    * Visit their website [here](https://clarifai.com/).
4. [Tilt ^0.1.4](https://www.npmjs.com/package/react-tilt)

## React Versions

1. React v16.8.2
2. React-DOM v16.8.2
3. React-Scripts v2.1.5

## Face Detection

The Clarifai API provides several models of which we are using the FACE_DETECT model which responds with all the locations of the faces in the image. Currently we are detecting only one face. the location of the face are in `data.outputs[INDEX].data.regions[INDEX].region_info.bounding_box`. Below is the code for predicting:

```
const app = new Clarifai.App({
    apiKey: YOUR_OWN_API_KEY
    });
app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayBox(this.findFace(response)))
    .catch(err => console.log(err))

```

## Contributing

Please fork this repository and checkout to a new branch to start working.
s