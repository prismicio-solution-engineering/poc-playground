import { PrismicLink } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { useRouter } from "next/router";
// const LangIcon = ({ lang }) => {
//   const code = lang.substring(3).toLowerCase();

//   return <span className={`fi fi-${code}`} />;
// };

export const LanguageSwitcher = ({ currentLocale, altLangs = []}) => {

  const locales = [currentLocale, altLangs.map(locale => locale.lang)]; // To-do : use the locales from next.config so all pages have the same list of locales. To redirect to homepage if the page translated doesn't exist 

  const router = useRouter();

  console.log(router)

  function handleChange(e) {
    //Handle language redirect through the header language switch, this relies on linkResolver, additional queries would be needed for more complex urls
    console.log(e.target.value);
    // router.push()
  }

  return (
    <div className="ml-auto flex items-center">
      <div className="lg:ml-8 lg:flex">
        <a className="flex items-center text-gray-700 hover:text-gray-800">
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={currentLocale}
          >
            {locales?.map((locale) => {
              return <option key={locale}>{locale}</option>;
            })}
          </select>
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
