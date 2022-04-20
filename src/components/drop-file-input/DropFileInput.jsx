import React from 'react'
import PropTypes from 'prop-types'

import './drop-file-input.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/uploadBtn2.png'
import logoImg from '../../assets/croct.png'


const DropFileInput = props => {
  return (
      <section className='drop-file-input'>
          <article className="drop-file-input_label">
              <div className='logo_and_btn'>
              <img src={logoImg} alt="" className='drop-file-input_img logo-icon' />
              <img src={uploadImg} alt="" className='drop-file-input_img btn-icon' />
              </div>
                <p className='paragraph'>Drop the image here or click to browse.</p>
          </article>
          <input type="file" value=""/>
      </section>
  )
}

DropFileInput.propTypes = {}

export default DropFileInput