import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Images } from '../utils/images';

const UploadItem = ({ defaultImage, frameImage, label, onImageUpload, onImageRemove }) => {
  const [image, setImage] = useState(defaultImage || null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      if (onImageUpload) {
        onImageUpload(file);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (event) => {
    event.stopPropagation();
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    if (onImageRemove) {
      onImageRemove();
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    
    <div className="upload-item" onClick={handleClick}>
         {image ? (
            <div className="image-container">
              <img src={image} alt="Uploaded" />
              <button onClick={handleRemoveImage} className="remove-button">
                &times;
              </button>
            </div>
          ) : (
            <>
              <img src={Images.frame} alt="frame" />
              <p>{label}</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </>
          )}
        </div>
  );
};

UploadItem.propTypes = {
  defaultImage: PropTypes.string,
  frameImage: PropTypes.string,
  label: PropTypes.string,
  onImageUpload: PropTypes.func,
  onImageRemove: PropTypes.func,
};

export default UploadItem;
