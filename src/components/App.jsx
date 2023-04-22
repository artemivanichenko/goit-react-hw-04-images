import { Component } from 'react';
import { BtnLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getImages } from './Api/Api';
import css from '../components/App.module.css';
// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: '',
    totalPage: '',
    isLoading: false,
    isLoaded: false,
    error: '',
  };

  handleFormSubmit = e => {
    if (e.query === '') {
      alert("Search request shouldn't be empty");
      return;
    }
    this.setState({ query: e.query, page: 1, images: [], isLoaded: true });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true, error: '' });
      const { query, page } = this.state;
      console.log(query);
      const response = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.images],
        total: response.totalImg,
        totalPage: response.totalPage,
        isLoading: false,
      }));

      //     .finally(() => this.setState({ isLoading: false }));
    }
  }
  render() {
    const { isLoaded, images, isLoading } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <p>test</p>}
        <ImageGallery isLoaded={isLoaded} images={images} />
        {isLoaded && <BtnLoadMore />}
      </div>
    );
  }
}
