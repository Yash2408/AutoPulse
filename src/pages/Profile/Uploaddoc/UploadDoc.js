import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUploadWithPreviewAndRemove = () => {
    const [images, setImages] = useState([]);

    const handleUpload = (index, e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const updatedImages = [...images];
            updatedImages[index] = {
                file: selectedFile,
                preview: URL.createObjectURL(selectedFile),
            };
            setImages(updatedImages);
        }
    };

    const handleRemove = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    return (
        <div className="image-upload-container">
            <div className="image-upload">
                {images[0] ? (
                    <div className="image-preview-container">
                        <img src={images[0].preview} alt="Preview" className="image-preview" />
                        <button className="remove-button" onClick={() => handleRemove(0)}>
                            Remove
                        </button>
                    </div>
                ) : (
                    <>
                        <img src="https://www.shutterstock.com/shutterstock/photos/1661857771/display_1500/stock-vector-dummy-aadhar-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1661857771.jpg" alt="photo" width="100" height="100" />
                    </>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleUpload(0, e)}/>
                <br/>
                <p>Document type</p>
            </div>
            <div className="image-upload">
                {images[1] ? (
                    <div className="image-preview-container">
                        <img src={images[1].preview} alt="Preview" className="image-preview" />
                        <button className="remove-button" onClick={() => handleRemove(1)}>
                            Remove
                        </button>
                    </div>
                ) : (
                    <>
                        <img src="https://www.shutterstock.com/shutterstock/photos/1661857771/display_1500/stock-vector-dummy-aadhar-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1661857771.jpg" alt="photo" width="100" height="100" />
                    </>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleUpload(1, e)} />
                <p>Document type</p>
            </div>
            <div className="image-upload">
                {images[2] ? (
                    <div className="image-preview-container">
                        <img src={images[2].preview} alt="Preview" className="image-preview" />
                        <button className="remove-button" onClick={() => handleRemove(2)}>
                            Remove
                        </button>
                    </div>
                ) : (
                    <>
                        <img src="https://www.shutterstock.com/shutterstock/photos/1661857771/display_1500/stock-vector-dummy-aadhar-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1661857771.jpg" alt="photo" width="100" height="100" />
                    </>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleUpload(2, e)} />
                <p>Document type</p>
            </div>
            <div className="image-upload">
                {images[3] ? (
                    <div className="image-preview-container">
                        <img src={images[3].preview} alt="Preview" className="image-preview" />
                        <button className="remove-button" onClick={() => handleRemove(3)}>
                            Remove
                        </button>
                    </div>
                ) : (
                    <>
                        <img src="https://www.shutterstock.com/shutterstock/photos/1661857771/display_1500/stock-vector-dummy-aadhar-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1661857771.jpg" alt="photo" width="100" height="100" />
                    </>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleUpload(3, e)} />
                <p>Document type</p>
            </div>
        </div>
    );
};

export default ImageUploadWithPreviewAndRemove;
