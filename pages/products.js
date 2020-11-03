import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Products() {

  function moveCard(e) {
    const card = e.currentTarget;
    if (card.attributes.type !== undefined) {
      if (card.attributes.type.value === 'cardContainer') {
        let xAxis = (card.scrollWidth / 2 - e.nativeEvent.layerX) / 25;
        let yAxis = (card.scrollHeight / 2 - e.nativeEvent.layerY) / 25;
        
        card.firstChild.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
        card.firstChild.style.transition = ''

        //console.log(e)

      } 
    }
  }

  function leaveCard(e){
    const card = e.currentTarget;
    card.firstChild.style.transition = 'ease 0.5s'
    card.firstChild.style.transform = 'rotateY(0deg) rotateX(0deg)'
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


      // cardContainer[0].addEventListener('mousemove', (e)=>{
      //   let xAxis = (window.innerWidth / 2 - e.clientX) / 10;
      //   let yAxis = (window.innerHeight / 2 - e.clientY) / 10;

      //   card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

      // })
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
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
          <motion.div onPointerMove={(e) => moveCard(e)} onPointerLeave={(e)=>leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Some Product</h3>
            </div>
          </motion.div>
        </div>



      </div>
    </Layout>
  )
}