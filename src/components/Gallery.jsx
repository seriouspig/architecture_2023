import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
        items={images}
        showThumbnails={false}
        showBullets={true}
        onClick={props.disableGalleryMode}
      />
    </div>
  );
  
  
}

export default Gallery