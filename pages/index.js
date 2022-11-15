import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';


const __allComponents = { ...components }

export default function Home({ doc, menu, footer }) {
  return (
    <div>
      <Layout currentLocale={doc.lang} altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {

  const client = createClient(previewData)

  const doc = (await client.getSingle('homepage', { lang: locale }).catch(e => {
    console.log(e)
    return null;
  }));

  if (!doc) {
    return {
      notFound: true,
    }
  }

  const menu = (await client.getSingle("menu", { lang: locale }).catch(e => {
    return null
  }));


  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

  return {
    props: {
      doc,
      menu,
      footer,
    },
  }
}