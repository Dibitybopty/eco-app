import { AnimateSharedLayout } from 'framer-motion';
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import ContactBG from '../components/ContactBG';
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

        <AnimateSharedLayout>
          
            <ContactBG />
        </AnimateSharedLayout>

      </div>
    </Layout>
  )
}