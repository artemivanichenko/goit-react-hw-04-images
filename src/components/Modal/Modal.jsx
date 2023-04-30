import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

const modalDiv = document.querySelector('#modal');

export const Modal = ({ toggleModal, tag, url }) => {
  const handleKeydown = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      toggleModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });

  return ReactDOM.createPortal(
    <div onClick={handleKeydown} className={css.overlay}>
      <div className={css.modal}>
        <img className={css.img} src={url} alt={tag} />
      </div>
    </div>,
    modalDiv
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string,
  toggleModal: PropTypes.func,
};
