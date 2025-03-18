import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchImg } from "./imageApi";
import { ImagesList } from "./ImagesList";
import { ImagesForm } from "./ImageForm";

export class ImageGalleryApp extends Component {
  state = {
    images: [],
    query: "",
    isLoading: false,
    page: 1,
    isLoadMore: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.imgSearch.value;

    try {
      this.setState({
        isLoading: true,
      });
      const fetchedImages = await fetchImg(query, this.state.page);
      this.setState({
        images: fetchedImages,
      });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      this.setState({
        isLoading: false,
        isLoadMore: true,
      });
    }
  };

  onLoadMoreClick = async () => {
    try {
      this.setState((prevState) => {
        return {
          page: (prevState.page += 1)
        };
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        const updatedPageImages = await fetchImg(
          this.state.query,
          this.state.page
        );
        this.setState({
          images: updatedPageImages,
        });
      } catch (error) {}
      toast.error("Something went wrong");
    }
  }

  render() {
    const { images, isLoading, isLoadMore } = this.state;

    return (
      <>
        <h2>Images</h2>
        <ImagesForm onSubmit={this.onSubmit} />
        {isLoading && <p>Loading...</p>}
        <ImagesList items={images} />
        {isLoadMore && (
          <button onClick={this.onLoadMoreClick}>Load More</button>
        )}
        <Toaster />
      </>
    );
  }
}
