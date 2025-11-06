import React, { useState } from 'react';
import './PhotoUpload.css';

const PhotoUpload = () => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [fileName, setFileName] = useState('No file selected');
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      setPhoto(file);
      setFileName(`Selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('No file selected');
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!photo) {
      showMessage('Please select a photo', 'error');
      return;
    }
    
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('title', title);
    
    setIsUploading(true);
    setProgress(0);
    setMessage({ text: '', type: '' });
    
    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      setProgress(100);
      
      if (response.ok) {
        showMessage(`Photo uploaded successfully! File: ${result.file.filename}`, 'success');
        setTitle('');
        setPhoto(null);
        setFileName('No file selected');
        setPreview(null);
        e.target.reset();
        
        setTimeout(() => {
          setProgress(0);
        }, 2000);
      } else {
        showMessage(result.error || 'Upload failed', 'error');
        setProgress(0);
      }
    } catch (error) {
      showMessage('Network error: ' + error.message, 'error');
      setProgress(0);
    } finally {
      setIsUploading(false);
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h1>Upload Photo</h1>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="title">Photo Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter photo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Photo</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              <label htmlFor="photo" className="file-input-label">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Choose Photo
              </label>
            </div>
            <div className="file-name">{fileName}</div>
          </div>

          {preview && (
            <div className="preview-container">
              <img src={preview} alt="Preview" />
            </div>
          )}

          {progress > 0 && (
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
          )}

          <button type="submit" disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload Photo'}
          </button>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PhotoUpload;
