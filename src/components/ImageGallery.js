import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick, searchPerformed }) => {
  
  const handleGalleryClick = e => {
    e.stopPropagation(); // Відміна подальшого поширення події
  };

  return (
    <div className="ImageGallery-container" onClick={handleGalleryClick}>
      {searchPerformed && images.length === 0 ? (
        <p className="NoResultsMessage">
          Nothing was found for this query😭😭😭😭
        </p>
      ) : (
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={onImageClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
