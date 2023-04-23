import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};
