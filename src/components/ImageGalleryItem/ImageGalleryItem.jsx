import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};
