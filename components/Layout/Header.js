import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";

const __allComponents = { ...components };

export const Header = ({ menu, currentLocale, altLangs }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4">
    {/* classes to adapt */}
    <div className="flex h-16 items-center justify-between">
      {/* Logo (lg+) */}
      <div className="hidden lg:flex lg:items-center">
        <a href="#">
          <span className="sr-only">{menu?.data?.company_name}</span>
          <img className="h-8 w-auto" src={menu?.data?.logo.url} alt={menu?.data?.logo.alt} />
        </a>
      </div>
      <nav className="flex-grow">
        <div className="-ml-5 flex justify-end">
          <SliceZone
            slices={menu?.data?.slices}
            components={__allComponents}
            context={{ logo: menu?.data.logo }}
          />
          {/* <Navigation/> */}
          <LanguageSwitcher currentLocale={currentLocale} altLangs={altLangs} />
        </div>
      </nav>
    </div>
  </header>
);
