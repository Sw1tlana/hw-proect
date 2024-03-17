// import css from '../App.module.css';
import { useEffect, useState } from "react";
import ThreeDots from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoaderMoreBtn from "./components/LoaderMoreBtn/LoaderMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { requestPhoto } from "./services/api";
import { Toaster } from "react-hot-toast";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const onSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
  }


useEffect(() => {
if (searchQuery === null) return;   
  async function fetchFoto() {
    try {
    setIsLoader(true);
    const data = await requestPhoto(searchQuery);
    setPhotos(data);
    } catch(error) {
     setIsError(true);
    } finally {
      setIsLoader(false)
    }
  }
  fetchFoto();
}, [searchQuery]);  


const loadMoreFotos = async () => {
  try {
    setIsLoader(true);
    const nextPage = page + 1;
    const newData = searchQuery ?
    await requestPhoto(searchQuery, nextPage) :
    await requestPhoto(nextPage);
    setPhotos((prevPhotos) => [...prevPhotos, ...newData]);
    setPage(nextPage);
  } catch(error) {
    setIsError(true);
  } finally {
    setIsLoader(false);
  }
}

function openModal(imageUrl) {
  setModalImageUrl(imageUrl);
}

function closeModal() {
  setModalImageUrl(null);
}


  return (
    <div>
      <SearchBar onSubmit={onSearchQuery}/>
      <Toaster/>
      <ImageGallery photos={photos} onImageClick={openModal}/>
      {isLoader && <ThreeDots/>}
      {isError && <ErrorMessage/>}
      {photos && photos.length > 0 && <LoaderMoreBtn onClick={loadMoreFotos}/>}
      {modalImageUrl && <ImageModal imageUrl={modalImageUrl} closeModal={closeModal}/>}
    </div>
  );
}

export default App;