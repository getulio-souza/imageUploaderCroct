import React from 'react'
import PropTypes from 'prop-types'

import '../cropImage/cropImage.css'
import { ImageConfig } from '../../config/ImageConfig';
import loadedImage from '../../assets/fleetcor.jpg'

const CropImage = props => {
 return (
    <section className='drop-file-input'>
      <section className="drop-file-input_label error-container">
         <article className='photo_and_message'>
            <img src={loadedImage} alt="" className='loaded_img'/>
               <div className='text-block'>
                <p className='crop_text'>Crop</p>
   
                <div className='crop_line'></div>
                <div className='crop_circle'></div>

                   <button className='crop_save_btn'>save</button>
                </div>
           <button className='close-btn'>x</button>
         </article>
        </section>
      </section>
  )
}

CropImage.propTypes = {}

export default CropImage