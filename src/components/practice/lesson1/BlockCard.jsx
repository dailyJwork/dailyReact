export const BlockCard = ({ article: { name, tag, title, description } }) => {
  return (
    <>
      <h3>Article / task 1</h3>
      <div className="blockCardContainer">
        <h4>{name}</h4>
        <h4>{title}</h4>
        <p>{tag}</p>
        <p>{description}</p>
      </div>
    </>
  );
};
