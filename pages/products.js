import { motion, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/Products.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Modal from '../components/ProductModel';


export default function Products() {

  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    let sideMenu = document.getElementById('sideMenu');
    //let sideMenuEffect = document.getElementById('sideMenuEffect');
    showModal ? sideMenu.style.zIndex = '3' : sideMenu.style.zIndex = '334';
    //showModal ? sideMenuEffect.style.zIndex = '3' : sideMenuEffect.style.zIndex = '335';

  })

  function moveCard(e) {
    const card = e.currentTarget;
    if (card.attributes.type !== undefined) {
      if (card.attributes.type.value === 'cardContainer') {
        //minus the scroll position of the screen so it's always the same value no matter how far scrolled
        let scrollPositionProduct = card.parentElement.parentElement.scrollTop;

        let xAxisProduct = ((card.offsetLeft + (card.offsetWidth / 2)) - e.clientX) / 50;
        let yAxisProduct = ((card.offsetTop + (card.offsetHeight / 2) - scrollPositionProduct) - e.clientY) / 50;
        //use currentTarget offsetLeft somehow to fix jaggy? | fixed when paired with scroll position above! :D

        card.firstChild.style.transform = `rotateY(${xAxisProduct}deg) rotateX(${-yAxisProduct}deg)`
        card.firstChild.style.transition = ''

        //console.log(card.parentElement.parentElement.scrollTop);

        //console.log(e.pageX)

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
      <div className={utilStyles.productWrapper}>
        <div id="productBG" className={utilStyles.productBG}>

          <div className={utilStyles.productLeft}></div>
          <motion.div transition={{ duration: 1.7 }} animate='animate' exit='exit' initial='initial' variants={cardAnimations} className={utilStyles.productRight}>

            <AnimateSharedLayout >
              <Modal showModal={showModal} setShowModal={setShowModal} text="Lithium Battery" alt='Lithium Battery' productImage='/images/products/battery.webp' />

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <motion.div layoutId='background' className={utilStyles.productCircle}>
                    <div className={utilStyles.productImages}>
                      <motion.img layoutId='productImg'
                        src='/images/products/battery.webp'
                        width={643}
                        height={378}
                        alt='Lithium Battery'
                      ></motion.img>
                    </div>
                    <div className={utilStyles.lowerImage}>
                      <motion.h3 style={{ display: 'inline-block' }} layoutId='title' >Lithium Battery</motion.h3>
                      <p>Growatt SP2000 Energy Storage System</p>
                    </div>

                  </motion.div>


                  <motion.button onClick={() => setShowModal(!showModal)} >MORE INFO</motion.button>


                </div>

              </motion.div>
            </AnimateSharedLayout>
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



        </div></div>
    </Layout>
  )
}