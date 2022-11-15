import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, menu, footer, currentLocale, altLangs }) => {
  return (
    <div>
      <div>
        <Head>
          <title>Prismic SE POC Website</title>
        </Head>
        {menu?.data ?
          <Header menu={menu} currentLocale={currentLocale} altLangs={altLangs} />
          : null
        }
        <main className="mb-10">
          {children}
        </main>
      </div>
      {footer?.data ?
        <Footer footer={footer} />
        : null
      }
    </div>
  );
};
