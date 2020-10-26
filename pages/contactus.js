import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function ContactUs() {

  return (
    <Layout contactus>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.contactbg}>
        {/* <object data="images/undraw_contact_us_15o2.svg"></object> */}

          <object data="/images/contact_us_ids2_1.svg"></object>


      </div>
    </Layout>
  )
}