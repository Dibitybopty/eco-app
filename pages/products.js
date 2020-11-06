import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

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

  function leaveCard(e) {
    const card = e.currentTarget;
    card.firstChild.style.transition = 'ease 0.5s'
    card.firstChild.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  const cardAnimations = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.35,
        
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
        
      }
    },
    initial: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7,
        
      }
    }
  }

  const cards = {
    animate: {
      y: 0,
      transition: {
        duration: 1
      }
      
    },
    initial: {
      y: 1000,
      
    },
    exit: {
      y: 1000,
      transition: {
        duration: 1.7,
        delayChildren: 0
      }     
      
    }
  }

  return (
    <Layout products>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.productBG}>

        {/* <object data="images/undraw_contact_us_15o2.svg"></object> */}

        <div className={utilStyles.productLeft}></div>
        <motion.div transition={{duration: 1.7}} animate='animate' exit='exit' initial='initial' variants={cardAnimations} className={utilStyles.productRight}>

          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

            <div type='card' className={utilStyles.productCard}>
            <div className={utilStyles.productCircle}></div>
              <div className={utilStyles.productImages}>
              <Image
                src='/images/products/sp2000_storage_battery.png'
                width={183}
                height={178}
                alt='Lithium Battery'
              ></Image>
              </div>
              <h3>Lithium Battery</h3>

            </div>
          </motion.div>
          <motion.div variants={cards}  onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Air Source Heat Pumps</h3>

            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Solar Photovoltaic</h3>
            </div>
          </motion.div>
          <motion.div  variants={cards}onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Solar Thermal Panels</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Thermodynamic Hot Water Systems</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Air-to-Air Heat Pumps</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Home Energy Minder</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>ESP Ecocent Series</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Solar iBoost</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Growatt Inverter Upgrade</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Infrared Heating Panels</h3>
            </div>
          </motion.div>
        </motion.div>



      </div>
    </Layout>
  )
}