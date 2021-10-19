import styled from "styled-components";

export const Main = styled.div`
  background-color: #344644;

`

export const Container = styled.div`


  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 85%;
  margin: 0 auto;

  height: 100px;
`;

export const Logo = styled.h1`
  font-family: Heebo;
  font-weight: 700;
  color: #29ebaa;

  cursor: pointer;
`;

export const BtnNewPost = styled.button`
  font-size: 1.2rem;
  font-family: Heebo;
  font-weight: 700;

  background-color: #447ce2;
  border: 0;

  color: #fff;

  padding: 10px 20px;
  border-radius: 10px;

  cursor: pointer;

  button:hover {
    transition: 0.2s;
    background-color: #538af0;
  }
`;

export const BackBtn = styled.img`
  width: 50px;
`;
