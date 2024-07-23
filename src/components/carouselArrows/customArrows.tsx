import React from 'react';
import { ArrowProps } from 'react-multi-carousel';
import "./custom-arrows.scss";

export const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="custom-arrow left-arrow" onClick={onClick}>
      {"<"}
    </button>
  );
};

export const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="custom-arrow right-arrow" onClick={onClick}>
      {">"}
    </button>
  );
};
