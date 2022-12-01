import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";

const __allComponents = { ...components };

export const Header = ({ menu, currentLocale, altLangs }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-4">
    <div className="mx-auto flex max-w-5xl items-baseline md:items-center">
      {/* <PrismicLink href="/" className="relative -m-4 p-4 text-xl font-black">
        <img src={menu?.data?.logo?.url} alt={menu?.data?.logo.alt} />
      </PrismicLink> */}
      <nav className="flex-grow">
        <ul className="-ml-5 flex border-b border-gray-200 justify-end">
          {/* <SliceZone slices={menu?.data?.slices} components={__allComponents} /> */}
          <Navigation menu={menu} />
          <LanguageSwitcher currentLocale={currentLocale} altLangs={altLangs} />
        </ul>
      </nav>
    </div>
  </header>
);
