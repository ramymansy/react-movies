import React from "react";
import propTypes from "prop-types";

// Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-Thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: propTypes.string,
  character: propTypes.string,
  imageUrl: propTypes.string,
};

export default Actor;
