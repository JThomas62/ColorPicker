import { useState } from "react";

// Write your Color component here
/* Defines the 'Color' component that displays a 
  colored div and handles click events
*/
const Color = ({ color, setSelectedColor }) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
    ></div>
  )
}

const App = () => {

  /* Create a state variable 'selectedColor' and a function 'setSelectedColor'
    to update it using the 'useState' hook
  */
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;