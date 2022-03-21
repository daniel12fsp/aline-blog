import { Footer } from "./Footer";
import { Info } from "./Info";
import { Main } from "./Main";
import { WhatCanBePossible } from "./WhatCanBePossible";
import styled from "styled-components";
import { BigScreen } from "../../constants";
import { Navbar } from "../Navbar";

const Container = styled.div`
  margin: 0 10px;

  ${BigScreen`
    margin: 0 20px;
  `}
`;

export function Landpage() {
  return (
    <>
      <Navbar />
      <Container>
        <Main />
        <WhatCanBePossible />
        <Info />
        <Footer />
      </Container>
    </>
  );
}
