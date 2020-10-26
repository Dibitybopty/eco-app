import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Gallery() {
  return (
    <Layout gallery>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
      </div>
    </Layout>
  )
}