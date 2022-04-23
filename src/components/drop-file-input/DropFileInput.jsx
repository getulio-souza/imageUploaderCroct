import React from 'react'
import PropTypes from 'prop-types'
import {useDropzone} from 'react-dropzone'
import './drop-file-input.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/uploadBtn2.png'
import logoImg from '../../assets/croct.png'
import { useState } from 'react';


const DropFileInput = props => {
  
  const [myImage, setImage] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upfile) => Object.assign(upfile, {
         preview: URL.createObjectURL(upfile)
        }))
      )
    }
  })

  return (
    <section
      className='drop-file-input hover_effect'>
      <article>

      {/*drag and drop image*/}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            isDragActive ?
              <img src={uploadImg} className='drop_img'/> :
              <p className='drop_text'>Drag and drop your image here.</p>
          }
      </div>
      {/*image preview*/}
      <div className='logo_container'>
        {myImage.map((upfile) => {
          return (
              <img src={upfile.preview} alt="Image Preview" className='logo_preview' />
         )
        })}
        </div> 
        </article>
      </section>
  )
}

DropFileInput.propTypes = {}

export default DropFileInput