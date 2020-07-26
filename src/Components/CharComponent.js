import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-block",
    border: "1px solid black",
    backgroundColor: "royalblue",
    color: "white",
    padding: "16px",
    margin: "5px",
  };

  return (
    <p style={style} onClick={props.click}>
      {props.value}
    </p>
  );
};

export default Char;
