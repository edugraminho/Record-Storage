import React from "react";
import { Main, Container, Logo, BtnNewPost } from "./styles.js";

import { Link } from "react-router-dom";

function HeaderMain() {
  return (
    <Main>
      <Container>
        <Logo>
          <h1>Record Person</h1>
        </Logo>

        <BtnNewPost>
          <Link to="/post">
            <button>Add new Post</button>
          </Link>
        </BtnNewPost>
      </Container>
    </Main>
  );
}

export default HeaderMain;
