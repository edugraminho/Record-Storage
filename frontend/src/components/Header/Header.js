import React from "react";
import { Main, Container, BackBtn } from "../Home/styles";

import { Link } from "react-router-dom";

import Back from "../../images/back-arrow.svg";

function Header() {
  return (
    <Main>
      <Container>
        <Link to="/">
          <BackBtn src={Back} />
        </Link>
      </Container>
    </Main>
  );
}

export default Header;
