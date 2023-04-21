import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};
