import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

import enMessages from "./locales/en.json";
import ptMessages from "./locales/pt.json";
import { IntlProvider } from "react-intl";
import flattenMessages from "./utilts/flattenMessages.ts";

const locale = navigator.language.startsWith("pt") ? "pt" : "en";
const messages = flattenMessages(locale === "pt" ? ptMessages : enMessages);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </StrictMode>
);
