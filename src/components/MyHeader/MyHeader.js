import React from "react";
import { Link } from "react-router-dom";
// Logos Image
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./MyHeader.styles";

const MyHeader = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default MyHeader;
