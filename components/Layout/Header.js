import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";
import NavigationFlyout from "./NavigationFlyout";

const __allComponents = { ...components };

export const Header = ({ menu, currentLocale, altLangs }) => (
  <section className="relative bg-white px-4">
    {/* <Navigation menu={menu} currentLocale={currentLocale} altLangs={altLangs} /> */}
    <NavigationFlyout
      menu={menu}
      currentLocale={currentLocale}
      altLangs={altLangs}
    />
  </section>
);
