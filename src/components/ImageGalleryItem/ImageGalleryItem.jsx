import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  // onClickImg,
  largeImageURL,
}) => {
  return (
    <li id={id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        data-modal={largeImageURL}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
