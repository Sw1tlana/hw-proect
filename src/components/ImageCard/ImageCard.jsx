const ImageCard = ({ photo }) => {
  return (
    <div>
        <img src={photo.urls.small} alt={photo.description} width={250}/>
        <h2>{photo.user.name}</h2>
        <p>Likes: {photo.likes}</p>
    </div>
  )
}

export default ImageCard