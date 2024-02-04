export function BigScreen(css: TemplateStringsArray): string {
  return `@media (min-width: 650px) {${css}}`;
}

export function MiddleScreen(css: TemplateStringsArray): string {
  return `@media (min-width: 400px) {${css}}`;
}
export const domain = "https://alinefernandes.com.br";

export const telephoneInfo = {
  number: "984068271",
  dd: "92",
  countryCode: "55",
  ddNumberFormat: function() {
    return this.dd+this.number;
  },
  ddParantesisNumberMinusFormat: function() {
    return `(${this.dd})${this.number.slice(0,5)}-${this.number.slice(5)}`;
  },
  countryCodeDdNumberFormat: function() {
    return `${this.countryCode}${this.dd}${this.number}`;
  }
} 

export const ldJsonDataRaw = {
  "@context": [
    "http://schema.org",
    {
      language: "pt-br",
    },
  ],
  "@type": "MedicalBusiness",
  name: "Aline Fernandes | Psicoterapeuta e Facilitadora",
  url: domain,
  image: require("@/imgs/aline.png"),
  description:
    "Aline Fernandes | Psicoterapeuta e Facilitadora | Manaus | Atendimento Presencial e Online",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "Parque dez de novembro",
    addressRegion: "AM",
    postalCode: "69055480",
    streetAddress:
      "Rua Cláudio Coutinho (antiga rua 30), casa 1246 - Parque dez de novembro",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.0786001406387444,
    longitude: -60.009211291106745,
  },
  telephone: telephoneInfo.ddNumberFormat(),
  logo: require("@/imgs/aline.png"),
};

export const ldJsonData = JSON.stringify(ldJsonDataRaw);

export const whatspappLink =
  `https://wa.me/${telephoneInfo.countryCodeDdNumberFormat()}/?text=Oi, quero agendar uma sessão?`;

export const defaultColorNavbar = "rgb(0 0 0)";

export const googleMapLink = "https://goo.gl/maps/4vP9TtheKnd5Yaj89";
