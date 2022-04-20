import React from 'react';
import PropTypes from 'prop-types';

import './errorUpload.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/uploadBtn.png'
import logoImg from '../../assets/croct.png'


const ErrorUpload = props => {
  return (
      <section className='drop-file-input'>
          <article className="drop-file-input_label error-container">
            <div className='photo_and_message'>
          <div className='photo-circle'></div>

          <div className='text-block'>
            <p className='text text-1'>Sorry, the upload failed.</p>
            <input type="file" name="try again" id="" className='text text-2' />Try again
          </div>

           <div className='close-btn'>
            x
           </div>
         </div>
        </article>
      </section>
  )
}

ErrorUpload.propTypes = {}

export default ErrorUpload