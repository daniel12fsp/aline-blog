import styled from "styled-components";
import LogoSrc from "@/imgs/logo.png";

const ContainerFoot = styled.div`
  text-align: center;
`;

const Link = styled.a`
  display: inline;
`;

const Logo = styled.img`
  width: 200px;
`;

export function Footer() {
  return (
    <ContainerFoot>
      <Logo src={LogoSrc} alt="logo" />

      <h2>Nos siga nas redes sociais</h2>
      <div>
        @nosdominiosdoinconsciente{" "}
        <Link
          href="https://www.facebook.com/nosdominiosdoinconsciente"
          target="_blank"
        >
          face
        </Link>{" "}
        e{" "}
        <Link
          href="https://www.instagram.com/nosdominiosdoinconsciente/"
          target="_blank"
        >
          insta
        </Link>
      </div>
      <div>
        @estoualinefernandes{" "}
        <Link
          href="https://www.facebook.com/estoualinefernandes"
          target="_blank"
        >
          face
        </Link>{" "}
        e{" "}
        <Link
          href="https://www.instagram.com/estoualinefernandes/"
          target="_blank"
        >
          insta
        </Link>
      </div>
    </ContainerFoot>
  );
}
