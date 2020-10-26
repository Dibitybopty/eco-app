import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WindTurbine from '../components/wind_turbine'


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


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* fake div to enable scroll - may delete if not needed */}
      <motion.div transition={{ delay: 2 }}></motion.div>
      <div className={utilStyles.homeWrapper}>
        <div className={utilStyles.innerHomeTop}>
          <div className={utilStyles.innerHomeTopLeft}></div>
          <div className={utilStyles.innerHomeTopRight}>
            <div className={utilStyles.innerHomeTopRightContent}>
              <motion.div className={utilStyles.solarShape} initial={{ transform: 'rotateY(120deg)' }} animate={{ transform: 'rotateY(0)' }} exit={{ transform: 'rotateY(120deg)' }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0, duration: 0.6 }}>
                <div className={utilStyles.solarHeadingPop}><motion.h1  initial={{ x: -3000, opacity: 1, filter: "blur(20px)" }} exit={{ x: -3000, opacity: 1, filter: "blur(20px)" }} animate={{ x: 0, opacity: 1, filter: "blur(0px)" }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 1.6 }}>Eco Sales & Services Ltd.</motion.h1></div>
                <div className={utilStyles.solarInfoPop}><motion.p  initial={{ x: 3000, opacity: 1, filter: "blur(10px)" }} exit={{ x: 3000, opacity: 1, filter: "blur(10px)" }} animate={{ x: 0, opacity: 1, filter: "blur(0px)" }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], delay: 0.12, duration: 1.9 }}>A local friendly renewable energy company giving nationwide renewable energy management solutions.</motion.p></div>

              </motion.div>


            </div>
          </div>
        </div>
        <div className={utilStyles.innerHomeBottom}>
        {/* <object id="midPole" data='/images/undraw_wind_turbine_edited.svg'></object> */}
        <motion.div  initial={{opacity: 0, y: 0}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -1000}} transition={{duration: 1.2, delay: 0.1}} className={utilStyles.turbineWrapper}><WindTurbine /></motion.div>
        {/* <div className={utilStyles.waveSquareWrapper}><object data="/images/wave_square.svg"></object></div> */}
        {/* <div className={utilStyles.waveSquareWrapperLeft}><object data="/images/wave_square.svg"></object></div> */}
        </div>
        
        {/* <motion.div  initial={{ opacity: 1, y: "550vh", height: "0vh" }} animate={{ opacity: 1, y: 0, height: "55vh" }} exit={{ opacity: 1, y: "550vh", height: "0vh", }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.9 }} className={utilStyles.innerHomeBottom}>
          <motion.img initial={{ y: 2250, opacity: 1 }} exit={{ y: 2250, opacity: 1 }} animate={{ y: -100, opacity: 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.9, delay: 0.5 }} src="images/silhouette-windmills.jpeg"></motion.img>

        </motion.div> */}


      </div>
      <div className={utilStyles.lowerMain}>

      </div>
      <div className={utilStyles.lowerMain}>

      </div>
    </Layout>
  )
}
