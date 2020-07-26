import React from "react";

const Validator = (props) => {
  
  
  
  return <p>{props.lenght > 5 ? "Text long enough" : "Short text"}</p>;
};

export default Validator;
