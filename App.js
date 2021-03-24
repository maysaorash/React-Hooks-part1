import React from 'react';
// import the new component here
import StateHook from './components/StateHook';
import StateHookObject from './components/StateHookObject';
import StateHookArray from './components/StateHookArray';

import './App.css';

function App() {
    return (
      <div>
      {/* render the component  */}
        <StateHook />
        <StateHookObject />
        <StateHookArray />
    </div>
    );
}

export default App;