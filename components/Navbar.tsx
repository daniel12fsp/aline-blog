import { useState } from "react";
import styled, { css } from "styled-components";
import {
  BigScreen,
  defaultColorNavbar,
  MiddleScreen,
  whatspappLink,
} from "../constants";

const Container = styled.div`
  display: inline-block;
  cursor: pointer;

  ${BigScreen`
  display: none;
`}
`;

interface BarProps {
  click: Boolean;
}

const Bar = styled.div<BarProps>`
  width: 35px;
  height: 5px;
  background-color: ${defaultColorNavbar};
  margin: 6px 0;
  transition: 0.4s;
`;

const Bar1 = styled(Bar)`
  ${(props) =>
    props.click &&
    css`
      transform: rotate(-45deg) translate(-9px, 6px);
    `}
`;

const Bar2 = styled(Bar)`
  ${(props) =>
    props.click &&
    css`
      opacity: 0;
    `}
`;

const Bar3 = styled(Bar)`
  ${(props) =>
    props.click &&
    css`
      transform: rotate(45deg) translate(-8px, -8px);
    `}
`;

interface MenuIconProps {
  click: Boolean;
  onClick: (click: boolean) => void;
}

function MenuIcon({ click, onClick }: MenuIconProps) {
  return (
    <Container
      onClick={() => {
        onClick(!click);
      }}
    >
      <Bar1 click={click} />
      <Bar2 click={click} />
      <Bar3 click={click} />
    </Container>
  );
}

const Nav = styled.nav`
  margin-bottom: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(163 102 102);
`;

const Link = styled.a`
  text-decoration: unset;
  border-bottom: 1px dashed ${defaultColorNavbar};
  color: ${defaultColorNavbar};
  ${BigScreen`margin: 20px;`}
`;

const Brand = styled.a`
  text-decoration: unset;
  font-size: 25px;
  text-align: center;
  color: ${defaultColorNavbar};
`;

const Menu = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgb(163 102 102);
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${BigScreen` display: none;`}
  position: absolute;
  width: 100%;
`;

const BigScreenLinks = styled.div`
  display: none;
  ${BigScreen`display: block;`}
`;

const SmallContainer = styled.div`
  display: flex;
  flex-flow: column;
  ${MiddleScreen`
  flex-flow: row;
  `}
`;

const SmallContactLinks = styled(Link)`
  font-size: 15px;

  ${MiddleScreen`
  margin-top: 0;
  margin-right: 15px;

  `}
  ${BigScreen` display: none;`}
`;


const AddressContactLink = styled(Link)`
  display: none;

  ${MiddleScreen`
  display:block;

  `}
  ${BigScreen` display: none;`}
`;


export function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <Nav>
      <MainContainer>
        <Brand href="/">Aline Fernandes</Brand>
        <SmallContainer>
          <SmallContactLinks href={whatspappLink}>Whatsapp</SmallContactLinks>
          <AddressContactLink href="#address">Endereço</AddressContactLink>
        </SmallContainer>

        <BigScreenLinks>
          <Link href="#about-us">Sobre</Link>
          <Link href="#contact">Contato</Link>
          <Link href="#schedule">Horário</Link>
          <Link href="#address">Endereço</Link>
          <Link href={whatspappLink}>Whatsapp</Link>
        </BigScreenLinks>
        <MenuIcon click={click} onClick={setClick} />
      </MainContainer>
      {click && (
        <Menu >
          <Link href="#about-us" onClick={() =>setClick(false)} >Sobre</Link>
          <Link href="#schedule" onClick={() =>setClick(false)} >Horário</Link>
          <Link href="#address"onClick={() =>setClick(false)} >Endereço</Link>
        </Menu>
      )}
    </Nav>
  );
}
