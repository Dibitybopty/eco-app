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
        let xAxis = ((card.offsetLeft + (card.offsetWidth / 2)) - e.clientX) / 25;
        //let yAxis = ((card.clientHeight / 2) - (e.clientX / 4)) / 25;
        // ((card.scrollHeight / 2  - (window.innerHeight - card.offsetTop) ) - e.clientY) / 25;
        //use currentTarget offsetLeft somehow to fix jaggy

        card.firstChild.style.transform = `rotateY(${xAxis}deg)`
        card.firstChild.style.transition = ''

        //console.log(e.clientY)

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
        <motion.div transition={{ duration: 1.7 }} animate='animate' exit='exit' initial='initial' variants={cardAnimations} className={utilStyles.productRight}>

          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

            <div type='card' className={utilStyles.productCard}>
              <div className={utilStyles.productCircle}>
                <div className={utilStyles.productImages}>
                  <Image
                    src='/images/products/battery.webp'
                    width={643}
                    height={378}
                    alt='Lithium Battery'
                    className={utilStyles.productInnerImages}
                  ></Image>
                </div>
                <div className={utilStyles.lowerImage}>
                  <h3>Lithium Battery</h3>
                  <p>Growatt SP2000 Energy Storage System</p>
                </div>

              </div>


              <motion.button>MORE INFO</motion.button>


            </div>

          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
            <div className={utilStyles.productCircle}>
                <div className={utilStyles.productImages}>
                  <Image
                    src='/images/products/pumps.png'
                    width={643}
                    height={378}
                    alt='Air Source Heat Pumps'
                    className={utilStyles.productInnerImages}

                  ></Image>
                </div>
                <div className={utilStyles.lowerImage}>
                  <h3>Air Source Heat Pumps</h3>
                  {/* <p>Growatt SP2000 Energy Storage System</p> */}
                  testing
                </div>

              </div>


              <motion.button>MORE INFO</motion.button>
              

            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
            <div className={utilStyles.productCircle}>
                <div className={utilStyles.productImages}>
                  <Image
                    src='/images/products/solarphoto.png'
                    width={643}
                    height={378}
                    alt='Lithium Battery'
                    className={utilStyles.productInnerImages}

                  ></Image>
                </div>
                <div className={utilStyles.lowerImage}>
                  <h3>Solar Photovoltaic</h3>
                  {/* <p>Growatt SP2000 Energy Storage System</p> */}
                </div>

              </div>


              <motion.button>MORE INFO</motion.button>
              
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
              <h3>Solar Thermal Panels</h3>
            </div>
          </motion.div>
          <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
            <div type='card' className={utilStyles.productCard}>
            <div className={utilStyles.productCircle}>
                <div className={utilStyles.productImages}>
                  <Image
                    src='/images/products/thermals.png'
                    width={643}
                    height={378}
                    alt='Lithium Battery'
                    className={utilStyles.productInnerImages}

                  ></Image>
                </div>
                <div className={utilStyles.lowerImage}>
                  <h3>Thermodynamic Hot Water Systems</h3>
                  {/* <p>Growatt SP2000 Energy Storage System</p> */}
                </div>

              </div>


              <motion.button>MORE INFO</motion.button>
              
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