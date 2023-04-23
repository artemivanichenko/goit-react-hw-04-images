import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImageURL,
  onOpenModal,
  onClick,
}) => {
  return (
    <li onClick={onOpenModal} id={id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        data-modal={largeImageURL}
        src={webformatURL}
        data-tag={tags}
        onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
};
