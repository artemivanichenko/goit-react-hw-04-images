import { Component } from 'react';
import css from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal');

export class Modal extends Component {
  render() {
    return (
      (
        <div className="overlay">
          <div className="modal">
            <img src="" alt="test text" />
          </div>
        </div>
      ),
      modalRoot
    );
  }
}

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
