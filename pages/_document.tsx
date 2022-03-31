import Document, { Html, Head, Main, NextScript } from "next/document";
import { domain, ldJsonData } from "../constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
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
          />
            <meta name="theme-color" content="#a36666"/>
          <title>
            Aline Fernandes | Psicoterapeuta e Facilitadora | Atendimento
            Presencial e Online
          </title>
          <meta
            name="keywords"
            content="Psicologia, Hipnose, Psicoterapeuta, Autoestima, Análise de Sonhos, Jung"
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
            content="Atendimento psicológico em Manaus e online"
          />

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
          <meta name="google-site-verification" content="wL0jmcnQhkO5CP0PoEtH0qBmpIczU-echlYvuaOdLqw" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YMH1BFZZL7"></script>
        <script dangerouslySetInnerHTML={ {__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YMH1BFZZL7');
          `.replace(/\s/g, " ").trim()}}/>
          </body>
      </Html>
    );
  }
}
