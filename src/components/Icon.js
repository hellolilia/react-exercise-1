import React from 'react';
import './Icon.scss';
import imgURL from '../assets/avatar.jpg';

function Icon() {
  return (
    <div className="Icon" align="center">
      <img src={imgURL} />
    </div>
  );
}

export default Icon;
