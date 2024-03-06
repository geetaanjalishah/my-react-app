import  { useState } from "react";


const ColorFlipper = () => {
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const hexColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCurrentColor(randomColor);
  };

  const rgbColor = () => {
    const randomColor =
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    setCurrentColor(randomColor);
  };

  const createRandomColor = () => {
    const randomColor =
      `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%)`;
    setCurrentColor(randomColor);
  };
  

  return (
    <div className="colorDisplay" style={{ background: currentColor }}>
      <div>
        <button className="btn" onClick={hexColor}>
          Create Hex color
        </button>
        <button className="btn" onClick={rgbColor}>
          Create RGB color
        </button>
        <button className="btn" onClick={createRandomColor}>
          Create Random color
        </button>
      </div>
      <div className="colorType">{currentColor}</div>
    </div>
  );
};

export default ColorFlipper;
