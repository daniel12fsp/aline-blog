import styled from "styled-components";
import LogoSrc from "@/imgs/logo.png";
import { CustomDisplay } from "./Info";

const ContainerFoot = styled.div`
  text-align: center;
`;

const Link = styled.a`
  display: block;
  margin: 20px;
`;

const Logo = styled.img`
  width: 200px;
`;

export function Footer() {
  return (
    <ContainerFoot>
      <Logo src={LogoSrc} alt="logo" />
      <CustomDisplay>Siga-nos nas redes sociais</CustomDisplay>
        <div>
        </div>
        <Link
          href="https://www.instagram.com/estoualinefernandes"
          target="_blank"
        >
        Instagram
        </Link>{" "}
        <Link
          href="https://www.youtube.com/channel/UCWtnKhSdtS387DcIJytXFLQ"
          target="_blank"
        >
          Youtube
        </Link>{" "}
        {" "}
        <Link
          href="https://www.facebook.com/estoualinefernandes/"
          target="_blank"
        >
          Facebook
        </Link>
    </ContainerFoot>
  );
}
