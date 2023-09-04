import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { LoadingIndicator } from './Loader';
import { Button } from './Button';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    selectedImage: null,
    page: 1,
    apiKey: '38514161-f950138758225d897083d0d15',
    searchPerformed: false,
      };

  componentDidMount() {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
  }

  loadMore = () => {
    const { query, page, apiKey } = this.state;
    const nextPage = page + 1;
  
    this.setState({ isLoading: true });

    axios
      .get('', { params: { q: query, page: nextPage, key: apiKey, image_type: 'photo', orientation: 'horizontal', per_page: 12 } })
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: nextPage,
          isLoading: false,
        }));
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

  handleSearchSubmit = query => {
    this.setState({ query, images: [], isLoading: true, page: 1, searchPerformed: true }, () => {
      this.loadMore();
    });
  };

  handleImageClick = selectedImage => {
    this.setState({ selectedImage });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, searchPerformed } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} isLoading={isLoading} />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <ImageGallery images={images} onImageClick={this.handleImageClick} searchPerformed={searchPerformed}/>
            {images.length > 0 && (
              <Button className="Button"onClick={this.loadMore} />
            )}
          </>
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
