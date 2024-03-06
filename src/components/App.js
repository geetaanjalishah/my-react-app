import Accordion from "./Accordion/Accordion";
import "./Accordion/Accordion.css";
import ColorFlipper from "./ColorFlipper/Color";
import "./ColorFlipper/Color.css"
import StarRating from "./Star-rating/StarRating";
import "./Star-rating/StarRating.css"
import Slider from "./Slider/Slider";
import './Slider/Slider.css'

const App = () => {
  return (
    <div>
      <Accordion />
      <ColorFlipper />
      <StarRating />
      <Slider />
    </div>
  );
};

export default App;
