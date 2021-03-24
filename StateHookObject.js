import React, {useState} from 'react';

const StateHookObject = () => {
  // pass an object for the initial state
  const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <form>
        <input
          type="text"
          value={name.firstName}
          // set firstName to whatever is typed inside the input field
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text"
          value={name.lastName}
          // set lastName to whatever is typed inside the input field
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
        <h2>First name is: {name.firstName}</h2>
        <h2>Last name is: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default StateHookObject;