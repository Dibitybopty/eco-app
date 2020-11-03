import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function MyApp({ Component, pageProps, router }) {

  const variants = {
    pageEnter: {
      y: router.route !== '/' ? '109vh' : '-109vh',
    },

    center: {
      zIndex: 333,
      y: 0
    },
    pageExit: {
      y: router.route === '/' ? '-169vh' : '169vh'
    }
  };

  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
  }

  const linkEffects = {
    in: {
      opacity: 1,
      x: "5rem",
      scale: 1.3,
      WebkitTextStroke: '0px #fff',
      WebkitTextFillColor: 'rgba(105,205,60,1)',
    },
    out: {
      // opacity: 0.85,
      x: "0rem",
      scale: 1,
      WebkitTextStroke: '2px #fff',
      WebkitTextFillColor: 'rgba(255, 255, 255, 0.3)',

    },
    initial: {
      opacity: 1.0,
      x: 0,
      scale: 1,
      WebkitTextStroke: '2px #fff',
      WebkitTextFillColor: 'rgba(255, 255, 255, 0.3)',
      // scale: 0.6,
    },
    solarOut: {
      transform: "rotateY(90deg)",
    },
    solarIn: {
      transform: "rotateY(0deg)",
    },
    duration: 0.6,

  }

  const spinSolar = {
    hidden: {
      transform: "rotateY(90deg)",
      opacity: 1,
    },
    show: {
      transform: "rotateY(0deg)",
      opacity: 1,
      transition: { duration: 0.09 }

    },

  }

  const container = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const navTransition = {
    duration: 1.6,
    ease: "anticipate"
  }

  // const [overflow, setOverflow] = useState(true);

  // useEffect(() => {
  //   if(overflow){
  //     document.querySelector('body').style.overflowY = 'hidden';
  //   }else{
  //     document.querySelector('body').style.overflowY = 'auto';


  //   }
  // })


  var dotStart = '0rem';



  if (router.route === '/products') {
    dotStart = '6.5rem';

  } else if (router.route === '/gallery') {
    dotStart = '12.99rem'
  } else if (router.route === '/contactus') {
    dotStart = '19.7rem'
  }

  const [blur, setBlur] = useState('blur(0px)')

  useEffect(() => {
    if (blur === 'blur(30px)') {
      var blurTimer = setInterval(() => {
        setBlur('blur(0px)');
        clearInterval(blurTimer);
      }, 590);
    }

  })


  return (
    <>



      {/* <div className={utilStyles.sideMenuWrapper}> */}
      <div id='sideMenuEffect' className={utilStyles.sideMenuEffect}>
        <svg viewBox="0 0 22 412" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="404" fill="transparent" />
          <motion.line id="navLine" x1="11" y1="10" x2="11" y2="403" stroke="rgba(255,255,255,0.6)" strokeWidth="5" strokeLinecap="round" />
          {/* <Link href='/'>
          <circle cx="11" cy="50" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className={utilStyles.navClick}></circle>
          </Link>
          <Link href='/products'>
          <circle cx="11" cy="155" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className={utilStyles.navClick}></circle>
          </Link>
          <Link href='/gallery'>
          <circle cx="11" cy="260" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className={utilStyles.navClick}></circle>
          </Link>
          <Link href='/contactus'>
          <circle cx="11" cy="365" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" className={utilStyles.navClick}></circle>
          </Link> */}
          <motion.circle id="navCircle" cx="11" cy="50" r="11" fill="rgba(255,255,255,1)" className={utilStyles.navCircle} animate={{ transform: 'translateY(' + dotStart + ')', filter: blur }} initial={{ transform: 'translateY(-4rem)', filter: 'blur(30px)' }} transition={navTransition} />
        </svg>
      </div>
      <div id='sideMenu' className={utilStyles.sideMenuItems}>

        {/* I don't like this effect */}

        {/* <div className={utilStyles.sideMenuItemWrapper}>
            <motion.div className={utilStyles.menuEffect}>
              <div className={utilStyles.menuEffectInner}>
                <motion.div className={utilStyles.menuEffectFront} initial="hidden" animate={router.route === '/' ? "show" : "hidden"} variants={container}>
                  <motion.div className={utilStyles.menuSquares} variants={spinSolar} ></motion.div>
                  <motion.div className={utilStyles.menuSquares} variants={spinSolar}></motion.div>
                  <motion.div className={utilStyles.menuSquares} variants={spinSolar}></motion.div>
                  <motion.div className={utilStyles.menuSquares} variants={spinSolar}></motion.div>
                  <motion.div className={utilStyles.menuSquares} variants={spinSolar}></motion.div>
                </motion.div>
                <div className={utilStyles.menuEffectBack}></div>
              </div>
            </motion.div>
            <Link href="/">
              <motion.a whileHover="in" whileHover="in" animate={router.route === '/' ? "in" : "out"} variants={linkEffects} transition={linkEffects} >HOME</motion.a>
            </Link>
          </div> */}

        <Link href="/">
          <motion.a whileHover="in" animate={router.route === '/' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} onClick={() => setBlur('blur(30px)')} >HOME</motion.a>
        </Link>

        <Link href="products">
          <motion.a whileHover="in" animate={router.route === '/products' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} onClick={() => setBlur('blur(30px)')}>PRODUCTS</motion.a>
        </Link>

        <Link href="gallery">
          <motion.a whileHover="in" animate={router.route === '/gallery' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} onClick={() => setBlur('blur(30px)')}>GALLERY</motion.a>
        </Link>

        <Link href="contactus">
          <motion.a whileHover="in" animate={router.route === '/contactus' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} onClick={() => { setBlur('blur(30px)') }}>CONTACT US</motion.a>
        </Link>

      </div>
      {/* </div> */}

      {/* <div className={utilStyles.menuWrapper}>
        
          <div className={utilStyles.ecoImage}><p>Eco Sales & Services Ltd</p></div>
        <div className={utilStyles.menuItems}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="products">
            <a>PRODUCTS</a>
          </Link>
          <Link href="products">
            <a>GALLERY</a>
          </Link>
          <Link href="products">
            <a>CONTACT US</a>
          </Link>
        </div>
        <div className={utilStyles.phone}>
          <p>TEL: 01782 256805</p>
        </div>

      </div> */}

      <AnimatePresence initial={false} >

        <motion.div className={utilStyles.siteWrapper} key={router.route} initial="pageEnter" animate="center" exit="pageExit" variants={variants}
          transition={{
            y: { ease: "easeInOut", stiffness: 150, damping: 25, duration: 1.5, delay: 0 }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
