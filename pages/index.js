import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import homeStyles from '../styles/Home.module.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import WindTurbine from '../components/wind_turbine'
import Modal from '../components/Modal';


export default function Home() {

  // const [overflow, setOverflow] = useState(true);

  // useEffect(() => {
  //   if (overflow) {
  //     document.querySelector('body').style.overflowY = 'hidden';
  //   } else {
  //     document.querySelector('body').style.overflowY = 'auto';


  //   }
  //   //clicking links fast stops onAnimationComplete from firing - this is needed to make sure scrolling is enabled
  //   var checkFlow = setInterval(()=>{
  //     document.querySelector('body').style.overflowY = 'auto';
  //     clearInterval(checkFlow)
  //   }, 2100)
  // })

  const container = {
    hidden: { y: -50 },
    exit: { y: -50 },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.5
      }
    }
  }

  const item = {
    hidden: { y: -50 },
    exit: { y: -50 },
    show: { y: 0 }
  }

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let sideMenu = document.getElementById('sideMenu');
    //let sideMenuEffect = document.getElementById('sideMenuEffect');
    showModal ? sideMenu.style.zIndex = '3' : sideMenu.style.zIndex = '334';
    //showModal ? sideMenuEffect.style.zIndex = '3' : sideMenuEffect.style.zIndex = '335';

  })


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={homeStyles.homeWrapper}>
        {/* <AnimateSharedLayout> */}
          <motion.div onClick={() => setShowModal(!showModal)} layoutId="banner" className={homeStyles.banner} animate="show" exit={{y: 0, x: 0}} initial="hidden" variants={container} >
            Up to&nbsp;
          <motion.span variants={item} >£</motion.span>
            <motion.span variants={item} >1</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >,</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >0</motion.span>
          &nbsp;<motion.p style={{ display: 'inline-block' }} layoutId="title">Green Homes Government Grant</motion.p>*.
           Click here to register your interest.
        </motion.div>
          <Modal showModal={showModal} setShowModal={setShowModal} text="Green Homes Government Grant" />
        {/* </AnimateSharedLayout> */}
        {/* <div className={homeStyles.innerHomeTop}>
          <div className={homeStyles.innerHomeTopLeft}></div>
          <div className={homeStyles.innerHomeTopRight}>
            <div className={homeStyles.innerHomeTopRightContent}>
              <motion.div className={homeStyles.solarShape} initial={{ transform: 'rotateY(120deg)' }} animate={{ transform: 'rotateY(0)' }} exit={{ transform: 'rotateY(120deg)' }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0, duration: 0.6 }}>
                <motion.div className={homeStyles.solarShapeBG} initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: 1000 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0, duration: 1.6 }}></motion.div>
                <div className={homeStyles.solarHeadingPop}><motion.h1 initial={{ x: -3000, opacity: 1, }} exit={{ x: -3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.6 }}>Eco Sales & Services Ltd.</motion.h1></div>
                <div className={homeStyles.solarInfoPop}><motion.p initial={{ x: 3000, opacity: 1, }} exit={{ x: 3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.9 }}>A local friendly renewable energy company giving nationwide renewable energy management solutions.</motion.p></div>
                <div className={homeStyles.solarInfoTel}><motion.p initial={{ x: 3000, opacity: 1, }} exit={{ x: 3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.08, duration: 2.3 }}>TEL: 01782 256805</motion.p></div>

              </motion.div>


            </div>
          </div>
        </div> */}

      </div>
    </Layout>
  )
}
