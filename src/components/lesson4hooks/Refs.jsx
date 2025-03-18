import { useRef } from "react";

export const RefExample = () => {
  const titleRef = useRef();
  const value = useRef(10);
  //   console.log(titleRef); // рефы не инициализируются до монтирования, поэтому они стают ссылкой на элемент в колбэке или эффекте

  const scrollToTitle = () => {
    const scroll = titleRef.current.getBoundingClientRect();
    window.scrollBy({
      top: scroll.top,
      left: scroll.left,
      behavior: "smooth",
    });
  };

  const updateBtnValue = () => {
    value.current += 1;
    console.log("After:", value.current);
  };

  return (
    <>
      <button onClick={updateBtnValue}>value: {value.current}</button>
      <button onClick={scrollToTitle}>Click me</button>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          cupiditate vero voluptas quaerat sed numquam dolores doloremque
          maiores esse labore obcaecati minus maxime dolore veniam reiciendis
          sunt sapiente, asperiores ipsa?
        </p>
      </div>
      <h3 ref={titleRef}>Here</h3>
    </>
  );
};
