import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImageURL,
  onOpenModal,
}) => {
  return (
    <li
      onClick={() => onOpenModal(largeImageURL, tags)}
      id={id}
      className={css.ImageGalleryItem}
    >
      <img
        className={css.ImageGalleryItemImage}
        largeimageurl={largeImageURL}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
