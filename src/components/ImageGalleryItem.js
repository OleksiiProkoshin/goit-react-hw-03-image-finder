export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags } = image;

  return (
    <li className="ImageGalleryItem" onClick={() => onClick(image)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
