import React, {useState} from 'react';

const StateHook = () => {

  const [title, setTitle] = useState('hello world');

// update the state with setTitle function
  const handleClick = () => {
    setTitle('React is cool');
  };

// const items = useState('hello world');
// const title = items[0];
// const setTitle = items[1];

  return (
    <div className="container">
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Change title
      </button>
    </div>
  );
};

export default StateHook;