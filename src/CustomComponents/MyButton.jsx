import React from "react";

const MyButton = (props) => {
  return (
    <button onClick={props.onClick} {...props}>
      {props.children}
    </button>
  );
};

export default MyButton;
