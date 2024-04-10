import { useEffect, useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // inputRef.current.focus();
  };

  useEffect(() => {
    if (inputRef.current === null) return;

    inputRef.current.focus();
  }, []);

  //   const buttonRef = useRef(null);

  //   const handleClick = () => {
  //     const btnCoordinates = buttonRef.current.getBoundingClientRect();
  //     console.log(btnCoordinates);

  return (
    <div>
      <button className="my-fav-btn" onClick={handleClick}>
        Click to do something
      </button>
      <input ref={inputRef} type="text" placeholder="Enter something" />
    </div>
  );
};

export default RefExample;
