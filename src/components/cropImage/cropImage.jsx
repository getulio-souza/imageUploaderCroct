




import React from "react";
import "../cropImage/cropImage.css"
import Cropper from 'react-easy-crop'
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button"

const CropImage = () => {
   const inputRef = React.useRef();

   const triggerFileSelectPopup = () => inputRef.current.click();

   const [image, setImage] = React.useState(null);
   const [croppedArea, setCropperArea] = React.useState(null)
   const [crop, setCrop] = React.useState({ x: 0, y: 0 })
   const [zoom, setZoom] = React.useState(1)

   const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
      setCropperArea(croppedAreaPixels);
   }
   
   const onSelectFile = () => {
      if (event.target.files && e.target.files.legnth > 0) {
         const reader = new FileReader()
         reader.readAsDataURL(event.target.files[0])
         reader.addEventListener('load', () => {
            setImage(reader.result);
         })
      } 
   }

   return (
      <section className="container">
         <article className="container-cropper">
            <>
               <div className="cropper">
              <Cropper
               image={image}
               crop={crop}
               zoom={zoom}
               aspect={1}
               onCropChange={setCrop}
               onZoomChange={setZoom}
               onCropComplete={onCropComplete}
               />
               </div>
            <div className="slider">
                  <Slider
                     min={1}
                     max={3}
                     step={0.1}
                     value={zoom}
                     onChange={(e, zoom)=> setZoom(zoom)}
                  />  
            </div>
            </> 
         </article>
         <div className="container-buttons">
            <input type="file"
               accept='image/*'
               ref={inputRef}
               style={{ display: 'none' }}
               onChange={onSelectFile}
            />
            <Button
               variant='contained' color='primary'
               style={{marginRight:'10px'}}
               onClick={triggerFileSelectPopup}>
               Update</Button>
            <Button variant='contained' color='secondary'>Save</Button>
            </div>
      </section> 
   );
}

export default CropImage