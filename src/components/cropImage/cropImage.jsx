import React from 'react'
import PropTypes from 'prop-types'
import {Slider} from '@material-ui/core'
import '../cropImage/cropImage.css'
import { ImageConfig } from '../../config/ImageConfig';
import loadedImage from '../../assets/fleetcor.jpg'
import { useState } from 'react';

const CropImage = props => {
   {/*setting two values to range slider*/ }
   const [val, setVal] = useState([0,40])
   const updateRange = (e, data) => {
      setVal(data)
   }
 return (
    <section className='drop-file-input'>
      <section className="drop-file-input_label error-container">
         <article className='photo_and_message'>
            <img src={loadedImage} alt="" className='loaded_img'/>
               <div className='text-block'>
                <p className='crop_text'>Crop</p>
                {/* range slider */}
                <div className='crop_line'>
                   <Slider
                      value={val}
                      onChange={updateRange}
                   />
                </div>
                   <button className='crop_save_btn'>save</button>
                </div>
           <button className='crop-close-btn'>x</button>
         </article>
        </section>
      </section>
  )
}

CropImage.propTypes = {}

export default CropImage