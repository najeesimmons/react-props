// This statement makes react available in this file for 
// babel to translate jsx and have access to React.createElement()
import React from 'react'

function Hello() {
  // Every component has, at minimum, a return. It generates a Virtual 
  // DOM node that will be added to the actual DOM.
  return (
    <h1>Hello World</h1>
  );
}

// This exposes the Hello class to other files which import from the App.js 
// file. 
export default Hello;
