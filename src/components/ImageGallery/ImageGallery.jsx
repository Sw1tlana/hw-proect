import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ photos, onImageClick }) => {
  return (
<ul>
  {photos !== null && Array.isArray(photos) && photos.map((photo) => {
    return <li key={photo.id} onClick={() => onImageClick(photo.urls.regular)}>
      <ImageCard photo={photo} onClick={onImageClick}/>
    </li>
  })}

</ul>
  )
}

export default ImageGallery
