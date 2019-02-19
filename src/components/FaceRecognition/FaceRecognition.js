import React from "react";
import './FaceRecognition.css';

const FaceRecogniton = ({ box, imageURL }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageURL} width='800px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecogniton;