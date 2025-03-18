export const GalleryList = ({ images, onLoadMoreClick, total }) => {
  return (
    <>
      <ul>
        {images.map(({ id, src: { large }, alt }) => {
          return (
            <div key={id}>
              <img src={large} alt={alt} width="200" height="200" />
            </div>
          );
        })}
      </ul>
      {total > images.length && <button onClick={onLoadMoreClick}>Load more</button>}
    </>
  );
};
