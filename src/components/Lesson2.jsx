import { useState } from "react";

export const Modal = ({ exitModal }) => {
  return (
    <div>
      <h1>Its modal</h1>
      <p>Some text</p>
      <p>Something</p>
      <button onClick={exitModal}>Close modal</button>
    </div>
  );
};

export const BtnApp = () => {
  const [values, setValues] = useState({
    x: 1,
    isModalOpen: false,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const downX = () => {
    setValues({
      ...values,
      x: values.x - 1,
    });
  };

  const showModal = () => {
    setValues({
      ...values,
      isModalOpen: true,
    });
  };

  const exitModal = () => {
    setValues({
      ...values,
      isModalOpen: false,
    });
  };

  return (
    <div>
      <p>{values.x}</p>

      <button onClick={updateX}>+</button>
      <button onClick={downX}>-</button>

      <button onClick={showModal}>Open modal</button>
      {values.isModalOpen && <Modal exitModal={exitModal}></Modal>}
    </div>
  );
};





// TRAINING
export const ButtonTest = () => {
  const [ djasjdasjd, setValues ] = useState({
    x: 0
  });

  const increment = () => {
    setValues({
      ...djasjdasjd,
      x: djasjdasjd.x += 1
    })
  }

  const decrement = () => {
    setValues({
      ...djasjdasjd,
      x: djasjdasjd.x -= 1
    })
  }

  return (
    <div>
      <p>{djasjdasjd.x}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

