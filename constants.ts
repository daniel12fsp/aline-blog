

export function BigScreen(css: TemplateStringsArray) :string{
    return `@media (min-width: 650px) {${css}}`;
}

export function MiddleScreen(css: TemplateStringsArray) :string{
  return `@media (min-width: 400px) {${css}}`;
}
export const domain="meudominio"


const ldJsonDataRaw = {
  "@context": [
      "http://schema.org",
      {
          "language": "pt-br"
      }
  ],
  "@type": "MedicalBusiness",
  "name": "Aline Fernandes | Psicoterapeuta e Facilitadora",
  "url": domain,
  "image": require("@/imgs/aline.png"),
  "description": "Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento Presencial e Online",
  "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Alexo",
      "addressRegion": "AM",
      "postalCode": "69060-110",
      "streetAddress": "322 R. Constelação de Touro"
  },
  "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.1010213483733193,
      "longitude": -60.00399223164815
  },
  "telephone": "92988113591",
  "logo": require("@/imgs/aline.png")
    }
  export const ldJsonData = JSON.stringify(ldJsonDataRaw)

export const whatspappLink = "https://wa.me/5592988113591/?text=Oi, quero agendar uma sessão?"

export const defaultColorNavbar = 'rgb(0 0 0)';


