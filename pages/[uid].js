import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout/Layout";
import { createClient } from '../prismicio';
import * as prismicH from '@prismicio/helpers';
import { components } from '../slices/index';

const __allComponents = { ...components }

export default function LandingPage({ doc, menu, footer }) {
  return (
    <div>
      <Layout currentLocale={doc.lang} altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ params, previewData, locale }) {

  const client = createClient(previewData)

  // Query document
  const doc = (await client.getByUID('landing_page', params.uid, { lang: locale }).catch(e => {
    return null;
  }));

  if (!doc) {
    return {
      notFound: true,
    }
  }

  // Query navigation
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
      footer
    },
  }
}

// Paths
export async function getStaticPaths() {
    const client = createClient()
    const documents = await client.getAllByType('landing_page', { lang: '*' })
  
    return {
      paths: documents.map((doc) => prismicH.asLink(doc)),
      fallback: false, // if a page has already been generated but doesn't show => display the cached page
    }
  }