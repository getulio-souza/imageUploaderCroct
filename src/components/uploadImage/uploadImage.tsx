import React from 'react'
import PropTypes from 'prop-types'

import '../cropImage/uploadImage.css'
import { ImageConfig } from '../../config/ImageConfig';
// import loadedImage from '../../assets/fleetcor.png'

const UploadImage = props => {
 return (
    <section className='drop-file-input'>
      <section className="drop-file-input_label error-container">
         <article className='photo_and_message'>
            {/* <img src={loadedImage} alt="" className='loaded_img'/> */}
                 <div className='text-block'>
                     
               </div>
         </article>
        </section>
      </section>
  )
}

UploadImage.propTypes = {}

export default UploadImage