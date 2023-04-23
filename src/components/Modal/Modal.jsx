import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

const modalDiv = document.querySelector('#modal');

export class Modal extends Component {
  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { url, tag } = this.props;
    return ReactDOM.createPortal(
      <div onClick={this.onBackdropClick} className={css.overlay}>
        <div className={css.modal}>
          <img className={css.img} src={url} alt={tag} />
        </div>
      </div>,
      modalDiv
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string,
};
