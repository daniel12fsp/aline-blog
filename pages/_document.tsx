import Document, { Html, Head, Main, NextScript } from "next/document";
import { domain, ldJsonData } from "../constants";
// import fs from "fs";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* <meta
            name="commit-hash"
            content={require("child_process")
              .execSync("git rev-parse HEAD")
              .toString()
              .trim()}
          />
          <meta
            name="commit-msg"
            content={require("child_process")
              .execSync("git show -s --format=%s")
              .toString()
              .trim()}
          /> */}

          <title>
            Aline Fernandes | Psicoterapeuta e Facilitadora | Atendimento
            Presencial e Online
          </title>
          <meta
            name="keywords"
            content="Aline Fernandes ,Psicologa, Hipnoterapia Ericksoniana, Hiponose, ROAR, Radicalmente Viva Além do Abuso, Limpeza Energétca, Barras de Access, Facelift, Processos Corporais de Access Consciousness "
          />
          <meta
            name="description"
            content="Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento Presencial e Online"
          />
          <link rel="canonical" href={domain} />
          <meta
            property="og:title"
            content="Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento Presencial e Online"
          />
          <meta
            property="og:description"
            content="Atendimento psicológico em Manaus"
          />

          {/* TODO gerar uma imagem da aline com nome dela */}
          <meta property="og:image" content={require("@/imgs/aline.png")} />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="960" />
          <meta property="og:url" content={domain} />
          <meta property="og:site_name" content="Aline Fernandes" />
          <meta property="og:type" content="website" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ldJsonData }}
          />

          <meta
            name="google-site-verification"
            content="V727dzuZu2kulElbNyybRq_NCpSMRkcQAtRNQaWhcQ8"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Psicóloga em Manaus | Aline Fernandes"
          />
          <meta
            name="twitter:description"
            content="Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento Presencial e Online"
          />
          <meta name="twitter:image" content={require("@/imgs/aline.png")} />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
