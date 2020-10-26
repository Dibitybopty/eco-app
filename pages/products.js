import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Products() {
  return (
    <Layout products>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.contactbg}>
        {/* <object data="images/undraw_contact_us_15o2.svg"></object> */}

          <object data="/images/undraw_smart_home.svg"></object>
   
    

      </div>
    </Layout>
  )
}