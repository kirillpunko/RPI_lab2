import "i18next";
// import all namespaces (for the default language, only)

import enNs1 from "../../public/locals/en/translations.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ns1";
    resources: {
      ns1: typeof enNs1;
    };
  }
}
