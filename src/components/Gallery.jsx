import React from 'react'
import ImageGallery from "react-image-gallery";

const Gallery = (props) => {

  return (
    <div
      className="gallery-container"
      onScroll={props.disableGalleryMode}
    >
      <h1 onClick={props.disableGalleryMode}>Close</h1>
      <ImageGallery
        fullscreen
        showFullscreenButton={false}
        showPlayButton={false}
        items={props.galleryImages}
        showThumbnails={false}
        showBullets={true}
        onClick={props.disableGalleryMode}
      />
    </div>
  );
  
  
}

export default Gallery