import { BtnLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.App}>
      <SearchBar />
      <ImageGallery />
      <BtnLoadMore />
      <BtnLoadMore />
    </div>
  );
};
