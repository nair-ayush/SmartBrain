import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onDetect }) => {
    return(
        <div>
            <p className='f3'>This brain will detect the face in your image.</p>
            <div className='center'>
                <div className='center form shadow-5 pa4'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Enter URL' onChange={onInputChange}/>
                    <button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer' onClick={onDetect}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;