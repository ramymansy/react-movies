import React from "react";
import propTypes from "prop-types";
// Styles
import { Wrapper, Content, Text } from "../HeroImage/HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImage.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
};

export default HeroImage;
