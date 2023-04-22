import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images, isLoaded }) => {
  return (
    <ul className={css.ImageGallery}>
      {/* {isLoaded && <p>Wait</p>} */}
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            largeImageURL={largeImageURL}
            // onClickImg={onClickImg}
            key={id}
            id={id}
            webformatURL={webformatURL}
            target="_blank"
            rel="noreferrer noopener"
            tags={tags}
          />
        ))}
    </ul>
  );
};
