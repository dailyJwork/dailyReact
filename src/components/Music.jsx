import musicCollection1 from "../json/collections.json";
import musicCollection2 from "../json/musicCollection2.json";

import clsx from "clsx";
import css from "../css/Music.module.css";
  
const isDescr = false;
const onSale = true;

const MusicGendre = ({ data: { audio, isPlaying } }) => {
  const titleClass = clsx(
    css.title,
    isDescr && css.descr,
    onSale && css.onSale
  );

  return (
    <div>
      <h2 className={titleClass}>Gendre: {audio}</h2>
      <p>Play now? {isPlaying}</p>
      <hr />
    </div>
  );
};

const MusicList = ({ musicCollection }) => {
  return (
    <>
      <hr />
      <ul>
        {musicCollection.map((el) => {
          return (
            <li key={el.id}>
              <MusicGendre data={el} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const MusicTask = () => {
  return (
    <>
      <MusicList musicCollection={musicCollection1} />
      <MusicList musicCollection={musicCollection2} />
    </>
  );
};
