import { useState, useEffect, useCallback } from 'react';
import css from '../components/App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BtnLoadMore,
  ImageGallery,
  SearchBar,
  Loader,
  Modal,
  getImagesApi,
} from './index';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState('');
  const [totalPage, setTotalPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');
  const [modalTag, setModalTag] = useState('');

  const handleFormSubmit = query => {
    if (query === '') {
      toast('Enter a search request');
      return;
    }
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const toggleModal = (largeImageURL, alt) => {
    setShowModal(!showModal);
    setModalImageURL(largeImageURL);
    setModalTag(alt);
  };

  const handleLoadMore = () => {
    setPage(page => (page += 1));
  };

  const getImages = useCallback(async () => {
    setIsLoading(true);
    const response = await getImagesApi(query, page);
    if (response.images.length === 0) toast(`Try again`);
    if (page === 1 && response.images.length !== 0)
      toast(`We are found ${response.totalImg} images`);
    if (totalPage === page) toast(`These are the last images`);
    setImages(prevState => [...prevState, ...response.images]);
    setTotal(response.totalImg);
    setTotalPage(response.totalPage);
    setIsLoading(false);
  }, [page, query]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getImages();
  }, [query, page]);

  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={2000} />
      {total > 0 ? (
        <ImageGallery onOpenModal={toggleModal} images={images} />
      ) : (
        <p className={css.text}>Make the right request and upload photos</p>
      )}

      {isLoading && <Loader />}
      {showModal && (
        <Modal toggleModal={toggleModal} url={modalImageURL} tag={modalTag} />
      )}
      {!isLoading && page < totalPage && (
        <BtnLoadMore onClick={handleLoadMore} />
      )}
    </div>
  );
};
