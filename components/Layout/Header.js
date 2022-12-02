import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";
import NavigationFlyout from "./NavigationFlyout";

const __allComponents = { ...components };

export const Header = ({ menu, currentLocale, altLangs }) => (
  <section className="relative border-b border-neutral-200 bg-white px-4">
    {/* <div className="mx-auto flex items-baseline md:items-center">
      <nav className="flex-grow">
        <ul className="-ml-5 flex border-gray-200 justify-end">
          <Navigation menu={menu} />
          <LanguageSwitcher currentLocale={currentLocale} altLangs={altLangs} />
        </ul>
      </nav>
    </div> */}
          <NavigationFlyout menu={menu} />
  </section>
);
