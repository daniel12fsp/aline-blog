import styled from "styled-components";
import { GenerateButton } from "../Button";
import { Display } from "../Display";
import { Text } from "../Text";
import { BigScreen, telephoneInfo, whatspappLink } from "../../constants";
import FotoAlineSrc from "@/imgs/aline.png";

const FotoAline = styled.img`
  max-height: 280px;
  border-radius: 10px;
  margin: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${BigScreen`
    flex-direction: row;
    justify-content: space-around;

  `}
`;

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  ${BigScreen`
  margin-bottom: 0;
`}
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  ${BigScreen`
  display: flex;
  align-items: center;
`}
`;

const CustomText = styled(Text)`
  line-height: 30px;
  ${BigScreen`
    max-width: 80%;
  `}
`;

export function Main() {
  return (
    <div id="about-us">
      <Display>
        Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento
        Presencial e Online
      </Display>
      <Container>
        <CenterImage>
          <FotoAline src={FotoAlineSrc} alt="foto" />
        </CenterImage>

        <ContainerText>
          <CustomText>
          Olá, me chamo Aline Fernandes, sou formada em Psicologia e Hipnoterapia Ericksoniana. Também facilito sessões de ROAR (Radicalmente Viva Além do Abuso), Limpeza Energética, Barras de Access, Facelift e Processos Corporais de Access Consciousness. Atendo crianças, jovens e adultos, presencialmente em Manaus e online para qualquer lugar. Acredito que terapia pode ser algo dinâmico, divertido e que funciona. Ajudo você a desenvolver a autoestima e conquistar o que deseja com facilidade. 
          </CustomText>

          <GenerateButton href={whatspappLink} target="_blank">
            Agende sua sessão pelo {telephoneInfo.ddParantesisNumberMinusFormat()}
          </GenerateButton>
        </ContainerText>
      </Container>
    </div>
  );
}
