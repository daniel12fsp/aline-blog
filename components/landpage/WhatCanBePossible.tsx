import { GenerateButton } from "../Button";
import { Display } from "../Display";
import styled from "styled-components";
import { BigScreen, whatspappLink } from "../../constants";
import WhatCanBePossibleSrc from "@/imgs/whatCanBePossible.jpg";
import LogoSrc from "@/imgs/logo.png";

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;

  ${BigScreen`
  width: 100px;
  height: 100px;
  `}
`;

export function WhatCanBePossible() {
  return (
    <>
      <ContainerText>
        <Logo src={LogoSrc} alt="logo" />
        <Display>O que mais é possível que você se quer considerou?</Display>
      </ContainerText>
      <img
        src={WhatCanBePossibleSrc}
        width="100%"
        height="100%"
        alt="O que é mais possível"
      />
      <GenerateButton href={whatspappLink} target="_blank">
        Reserve seu horário agora
      </GenerateButton>
    </>
  );
}
