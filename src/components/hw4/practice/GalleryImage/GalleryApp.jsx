import { useState, useEffect } from "react";

import { getImages } from "./SearchImagesAPI";
import { SearchForm } from "./SearchForm";
import { GalleryList } from "./GalleryList";

export const GalleryApp = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setTotal(0);
    setError(null)
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    fetchImages(query, page);
  }, [query, page]);

  const fetchImages = async (query, page) => {
    try {
      const { photos, total_results } = await getImages(query, page);
      setImages((prevState) => {
        return [...prevState, ...photos];
      });
      setTotal(total_results);
    } catch (error) {
      setError(error.message);
    }
  };

  const onLoadMoreBtnClick = () => {
    setPage((prevState) => { return prevState + 1})
  }

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {images.length > 0 && <GalleryList images={images} onLoadMoreClick={onLoadMoreBtnClick} total={total}/>}
      {query !== "" && total === 0 && <p>Sorry, no images with {query}</p>}
      {error && <p>Sorry, no items</p>}
    </>
  );
};
