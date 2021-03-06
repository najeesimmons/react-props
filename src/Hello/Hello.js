// The "PROPS" parameter that the Hello() function takes references
// the data passed in at the components render point. More specifically, 
// it is a property on the props object.
function Hello(props) {
  // Every component has, at minimum, a return. It generates a Virtual 
  // DOM node that will be added to the actual DOM.
  return (
    <>
      <h1>Hello {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      <p>You are an awesome {props.job}!</p>
    </>
  );
}

// This exposes the Hello class to other files which import from the App.js 
// file. 
export default Hello;
