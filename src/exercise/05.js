// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import propTypes from 'prop-types';
import '../box-styles.css';

const Box = ({size, style, ...otherProps}) => {
  const sizeClassName = size != null ? `box--${size}` : '';
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  );
};

Box.propTypes = {
  size: propTypes.string,
  style: propTypes.object,
};

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
);

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
    </>
  );
}

export default App;
