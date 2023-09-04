import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export class Modal extends Component {
  openModal = imageURL => {
    const instance = basicLightbox.create(`
          <img src="${imageURL}" alt="Image" />
        `);

    instance.show();
  };

  handleCloseModal = () => {
    this.props.onClose();
  };

  render() {
    const { image } = this.props;
    const { largeImageURL } = image;

    return (
      <div className="Overlay" onClick={this.handleCloseModal}>
        <div className="Modal" onClick={e => e.stopPropagation()}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>
    );
  }
}
