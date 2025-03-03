import { ImagesItem } from "./ImagesItem";

export const ImagesList = ({ items }) => {
  return (
    <ul>
        {items.map((el) => {
            return (
                <ImagesItem key= {el.id} item={el} />
            )
        })}
    </ul>
  )
};
