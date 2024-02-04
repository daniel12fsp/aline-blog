import styled from "styled-components";
import { GenerateButton } from "../Button";
import { Display } from "../Display";
import { Text } from "../Text";
import {
  BigScreen,
  googleMapLink,
  ldJsonDataRaw,
  telephoneInfo,
  whatspappLink,
} from "../../constants";
import MapSrc from "@/imgs/mapa.jpeg";

const ContainerAddress = styled.div``;

const LinkMap = styled.a`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const MapImg = styled.img`
  ${BigScreen`max-width: 400px;`}
`;

export const CustomDisplay = styled(Display)`
  margin: 20px 0;
`;

const SimpleText = styled(Text)`
  margin: 10px 0;
  text-align: center;
`;

function Address() {
  return (
    <ContainerAddress id="address">
      <CustomDisplay>Endereço</CustomDisplay>
      <LinkMap href={googleMapLink} target="_blank">
        <MapImg src={MapSrc} alt="Mapa" />
      </LinkMap>
      <SimpleText>{ldJsonDataRaw.address.streetAddress}</SimpleText>
      <GenerateButton href={googleMapLink} target="_blank">
        Ver no goolge maps
      </GenerateButton>
    </ContainerAddress>
  );
}

const Button = styled(GenerateButton)`
  margin-top: 10px;
`;

function Contact() {
  return (
    <div id="contact">
      <CustomDisplay>Entre em contato</CustomDisplay>
      <GenerateButton href={whatspappLink}>
        Mande um whatsapp {telephoneInfo.ddParantesisNumberMinusFormat()}
      </GenerateButton>
      <Button href={`tel:${telephoneInfo.ddNumberFormat()}`}>Ligue para {telephoneInfo.ddParantesisNumberMinusFormat()}</Button>
    </div>
  );
}

const CenterList = styled.ul`
  text-align: center;
`;

function Schedule() {
  return (
    <div id="schedule">
      <CustomDisplay>Horários de Funcionamento</CustomDisplay>
      <Text>
        <CenterList>
          <li>Seg: 14 - 20h</li>
          <li>Ter: 08 - 20h</li>
          <li>Qua: 08 - 20h</li>
          <li>Qui: 08 - 20h</li>
          <li>Sex: 08 - 20h</li>
          <li>Sab: 09 - 16h</li>
          <li>Dom: Fechado</li>
        </CenterList>
      </Text>
    </div>
  );
}

const Container = styled.div`
  ${BigScreen`
  display: flex;
  justify-content: space-around;
  `}
`;

const SubContainer = styled.div`
  margin: 0 10px;
  ${BigScreen`
  display: flex;
  flex-direction: column;
  `}
`;

export function Info() {
  return (
    <Container>
      <Address />
      <SubContainer>
        <Contact />
        <Schedule />
      </SubContainer>
    </Container>
  );
}
