// import React, { useState, useRef } from 'react';
// import { Images } from '../utils/images';

// const UploadItem = () => {
//   const [image, setImage] = useState(null);
//   const fileInputRef = useRef(null); // Create a ref for the file input element

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = (event) => {
//     event.stopPropagation(); // Prevent the click event from propagating
//     // if (fileInputRef.current) { 
//       setImage(null);
//       fileInputRef.current.value = null;
//     }
//   };

//   const handleClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click(); 
//     }
//   };

//   return (
//     <div className="upload-item" onClick={handleClick}>
//       {image ? (
//         <div className="image-container">
//           <img src={image} alt="Uploaded" />
//           <button onClick={handleRemoveImage} className="remove-button">
//             &times;
//           </button>
//         </div>
//       ) : (
//         <>
//           <img src={Images.frame} alt="frame" />
//           <p>Firma Logo</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             ref={fileInputRef}
//             style={{ display: 'none' }}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default UploadItem;
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
    // <div className="upload-item" onClick={handleClick}>
    //   {image ? (
    //     <div className="image-container" style={{ position: 'relative', display: 'inline-block' }}>
    //        <img src={Images.frame} alt="frame" />
    //       <button
    //         onClick={handleRemoveImage}
    //         className="remove-button"
    //         style={{
    //           position: 'absolute',
    //           top: '5px',
    //           right: '5px',
    //           background: 'red',
    //           border: 'none',
    //           color: 'white',
    //           borderRadius: '50%',
    //           cursor: 'pointer',
    //         }}
    //       >
    //         &times;
    //       </button>
    //     </div>
    //   ) : (
    //     <>
    //       <img src={frameImage || Images.frame} alt="frame" style={{ width: '100%', height: 'auto' }} />
    //       <p>{label || 'Upload Image'}</p>
    //       <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleImageUpload}
    //         ref={fileInputRef}
    //         style={{ display: 'none' }}
    //       />
    //     </>
    //   )}
    // </div>
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
