import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Products() {

  function moveCard(e) {
    //console.log(e)
  }

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const cardContainer = document.querySelectorAll('div[type=cardContainer]');
      const card = document.querySelectorAll('div[type=card]');

      // for (let i = 0; i < cardContainer.length; i++) {
      //   cardContainer[i].addEventListener('mouseover', (e) => {
      //     let xAxis = (window.innerWidth / 2 - e.clientX) / 10;
      //     let yAxis = (window.innerHeight / 2 - e.clientY) / 10;

      //     card[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      //   })
      // }


      cardContainer[0].addEventListener('mousemove', (e)=>{
        let xAxis = (window.innerWidth / 2 - e.clientX) / 10;
        let yAxis = (window.innerHeight / 2 - e.clientY) / 10;

        card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

      })
    })
  })
  return (
    <Layout products>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.productBG}>
        {/* <object data="images/undraw_contact_us_15o2.svg"></object> */}

        <div className={utilStyles.productLeft}></div>
        <div className={utilStyles.productRight}>
          <motion.div onPointerMove={(e)=>moveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <div type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </div>
          <div className={utilStyles.productCardContainer}></div>
          <div className={utilStyles.productCardContainer}></div>
          <div className={utilStyles.productCardContainer}></div>
          <div className={utilStyles.productCardContainer}></div>
          <div className={utilStyles.productCardContainer}></div>
          <div className={utilStyles.productCardContainer}></div>
        </div>



      </div>
    </Layout>
  )
}