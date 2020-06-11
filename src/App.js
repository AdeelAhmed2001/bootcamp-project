import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
const Display = React.createElement('div',null,'Hello world to all')
ReactDOM.render(
  Display,
  document.getElementById('root')
) 


function App() {
  return (
    <div>
      <h1>Hello world from Amir</h1>
    </div>
  );
}

export default App;

