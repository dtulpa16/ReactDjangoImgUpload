import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      // Fetch the list of images from the Django backend
      const fetchImages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/images/');
          setImages(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchImages();
    }, []);
  
    return (
      <div className="">
        {images.map((image) => (
          <div className="image-card">
            <img src={`http://127.0.0.1:8000${image.image_url}`} width="150" alt={image.title} />
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    );
}
