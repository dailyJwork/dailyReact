import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchImg } from "./imageApi";
import { ImagesList } from "./ImagesList";
import { ImagesForm } from "./ImageForm";

export class ImageGalleryApp extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      const fetchedImages = await fetchImg();
      this.setState({
        images: fetchedImages,
      });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const query = event.target.imgSearch.value;
    console.log(query);
    return query
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
        <h2>Images</h2>
        <ImagesForm onSubmit={this.onSubmit} />
        {isLoading && <p>Loading...</p>}
        <ImagesList items={images} />
        <Toaster />
      </>
    );
  }
}
