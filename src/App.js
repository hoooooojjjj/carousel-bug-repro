import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    /* I add props, arrows={true} 
    -> console said :
    1. console.js:273 Warning: React does not recognize the `currentSlide` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `currentSlide` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
    2. console.js:273 Warning: React does not recognize the `slideCount` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `slideCount` instead. If you accidentally passed it from a parent component, remove it from the DOM element. */

    <Carousel afterChange={onChange} arrows={true}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default App;
