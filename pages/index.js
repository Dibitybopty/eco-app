import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import WindTurbine from '../components/wind_turbine'


export default function Home() {

  const container = {
    hidden: {
      y: -50,
      transition: {
        delay: 0, duration: 0
      }
    },
    exit: {
      y: -50,
      transition: {
        delay: 0, duration: 0
      }
    },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.1
      }
    }
  }

  const item = {
    hidden: { y: -50, },
    exit: {
      y: -50,
      transition: {
        delay: 0, duration: 0
      }
    },
    show: { y: 0, }
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
      <div className={utilStyles.homeWrapper}>
        <AnimateSharedLayout>
          <motion.div onClick={() => setShowModal(!showModal)} layoutId="banner" className={utilStyles.banner} animate="show" exit="exit" initial="hidden" variants={container}>
            <span>Up to</span>&nbsp;
          <motion.span variants={item} >£</motion.span>
            <motion.span variants={item} >1</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >,</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >0</motion.span>
            <motion.span variants={item} >0</motion.span>
            &nbsp;
            <motion.span variants={item} >F</motion.span>
            <motion.span variants={item} >R</motion.span>
            <motion.span variants={item} >E</motion.span>
            <motion.span variants={item} >E</motion.span>
            &nbsp;
            <motion.span variants={item} >S</motion.span>
            <motion.span variants={item} >O</motion.span>
            <motion.span variants={item} >L</motion.span>
            <motion.span variants={item} >A</motion.span>
            <motion.span variants={item} >R</motion.span>
            &nbsp;

          <motion.span style={{ display: 'inline-block', fontWeight: 600 }} layoutId="title">Green Homes Government Grant.</motion.span>
          &nbsp;<span style={{ fontWeight: 600 }}>Click here to register your interest.</span>
          </motion.div>
          <Modal showModal={showModal} setShowModal={setShowModal} text="Green Homes Government Grant" />
        </AnimateSharedLayout>

        <div className={utilStyles.mainContent}>
          <div className={utilStyles.turbines}>
            <WindTurbine/>
            {/* <img src='/images/animate-turbines.svg'></img> */}
          </div>
          <div className={utilStyles.blobContainer}>
            <div className={utilStyles.mainHeadingsWrapper}>
              <div className={utilStyles.mainHeadings}>
                <h1 initial={{ x: -2000, opacity: 1, transition: {delay: 0} }} exit={{ x: -3000, opacity: 1, transition: {delay: 0} }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.6 }}>Eco Sales & Services Ltd.</h1>
                <p initial={{ x: 3000, opacity: 1, transition: {delay: 0} }} exit={{ x: 3000, opacity: 1, transition: {delay: 0} }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.9 }}>A local friendly renewable energy company giving nationwide renewable energy management solutions.</p>
                <motion.h3 initial={{ x: 3000, opacity: 1, transition: {delay: 0, duration: 2.6} }} exit={{ x: 3000, opacity: 1, transition: {delay: 0, duration: 2.6} }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.08, duration: 2.3 }}>TEL: 01782 256805</motion.h3>
              </div>
            </div>

          </div>


          {/* <div className={utilStyles.shapeContainer}>
            <div className={utilStyles.solarShape} initial={{ transform: 'rotateY(120deg)' }} animate={{ transform: 'rotateY(0)' }} exit={{ transform: 'rotateY(120deg)' }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0, duration: 0.6 }}>
              <div className={utilStyles.solarShapeBG} initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: 1000 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0, duration: 1.6 }}></div>
              <div className={utilStyles.solarHeadingPop}><h1 initial={{ x: -3000, opacity: 1, }} exit={{ x: -3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.6 }}>Eco Sales & Services Ltd.</h1></div>
              <div className={utilStyles.solarInfoPop}><p initial={{ x: 3000, opacity: 1, }} exit={{ x: 3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 2.9 }}>A local friendly renewable energy company giving nationwide renewable energy management solutions.</p></div>
              <div className={utilStyles.solarInfoTel}><p initial={{ x: 3000, opacity: 1, }} exit={{ x: 3000, opacity: 1, }} animate={{ x: 0, opacity: 1, }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.08, duration: 2.3 }}>TEL: 01782 256805</p></div>

            </div>
          </div> */}


        </div>
      </div>

    </Layout>
  )
}
