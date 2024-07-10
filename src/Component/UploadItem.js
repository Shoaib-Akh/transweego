import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Images } from '../utils/images';

const UploadItem = ({ defaultImage, frameImage, label, onImageUpload, onImageRemove, onlyImage, onlyPDF }) => {
  const [file, setFile] = useState(defaultImage || null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
      if (onImageUpload) {
        onImageUpload(selectedFile);
      }
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveFile = (event) => {
    event.stopPropagation();
    setFile(null);
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

  const acceptedFileTypes = onlyImage ? 'image/*' : onlyPDF ? 'application/pdf' : '*/*';

  return (
    <div className="upload-item" onClick={handleClick}>
      {file ? (
        <div className="file-container">
          {onlyImage && <img src={file} alt="Uploaded" />}
          {onlyPDF && <p>{label}</p>}
          <button onClick={handleRemoveFile} className="remove-button">
            &times;
          </button>
        </div>
      ) : (
        <>
          <img src={frameImage || Images.frame} alt="frame" />
          <p>{label}</p>
          <input
            type="file"
            accept={acceptedFileTypes}
            onChange={handleFileUpload}
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
  onlyImage: PropTypes.bool,
  onlyPDF: PropTypes.bool,
};

export default UploadItem;
