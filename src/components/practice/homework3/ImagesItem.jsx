export const ImagesItem = ({ item: { largeImageURL, type, tags } }) => {
  return (
    <div>
      <img src={largeImageURL} alt={type} width="200" height="200"/>
      <p>{tags}</p>
    </div>
  );
};
