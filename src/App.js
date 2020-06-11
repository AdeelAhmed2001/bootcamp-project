import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
const Display = React.createElement('div',null,'Hello world')
ReactDOM.render(
  Display,
  document.getElementById('root')
) 


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

