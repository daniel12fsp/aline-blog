import { GenerateButton } from "../Button";
import styled from "styled-components";
import { whatspappLink } from "../../constants";
import WhatCanBePossibleSrc from "@/imgs/whatCanBePossible.jpg";

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

const Quote = styled.blockquote`
font-size: 20px;
margin-bottom: 10px;
color: rgb(102, 0, 0);

`
const Author = styled.span` 
font-size: 12px;
`

export function WhatCanBePossible() {
  return (
    <>
      <ContainerText>
        <Quote>Só aquilo que somos realmente tem o poder de nos curar. <Author> Carl Gustav Jung.</Author></Quote>

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
