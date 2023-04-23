import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, isLoaded, onOpenModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {isLoaded ? (
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            target="_blank"
            rel="noreferrer noopener"
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onOpenModal}
          />
        ))
      ) : (
        <p className={css.text}>Make the right request and upload photos</p>
      )}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  isLoaded: PropTypes.bool,
  onOpenModal: PropTypes.func.isRequired,
};
