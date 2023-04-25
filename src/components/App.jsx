import { Component } from 'react';
import { BtnLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getImages } from '../Api/Api';
import css from '../components/App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: '',
    totalPage: '',
    isLoading: false,
    showModal: false,
    modalImageURL: '',
    modalTag: '',
  };

  handleFormSubmit = e => {
    if (e.query === '') {
      toast("Search request shouldn't be empty");
      return;
    }
    this.setState({ query: e.query, page: 1, images: [] });
  };
  toggleModal = (largeImageURL, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    this.setState({
      modalImageURL: largeImageURL,
      modalTag: alt,
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true, error: '' });
      const { query, page } = this.state;
      const response = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.images],
        total: response.totalImg,
        totalPage: response.totalPage,
        isLoading: false,
      }));
    }
  }
  render() {
    const {
      total,
      images,
      totalPage,
      page,
      isLoading,
      modalImageURL,
      modalTag,
      showModal,
    } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={2000} />
        {total > 0 ? (
          <ImageGallery onOpenModal={this.toggleModal} images={images} />
        ) : (
          <p className={css.text}>Make the right request and upload photos</p>
        )}

        {isLoading && <Loader />}
        {showModal && (
          <Modal
            toggleModal={this.toggleModal}
            url={modalImageURL}
            tag={modalTag}
          />
        )}
        {total > 0 && page < totalPage && (
          <BtnLoadMore onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
