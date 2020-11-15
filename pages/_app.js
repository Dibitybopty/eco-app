import '../styles/globals.css'
import { motion, AnimatePresence, transform } from 'framer-motion';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  var dotStart = '0rem';

  if (router.route === '/products') {
    dotStart = '6.5rem';

  } else if (router.route === '/gallery') {
    dotStart = '12.99rem'
  } else if (router.route === '/contactus') {
    dotStart = '19.7rem'
  }

  const [blur, setBlur] = useState('blur(0px)');


  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
    })
    if (blur === 'blur(30px)') {
      var blurTimer = setInterval(() => {
        setBlur('blur(0px)');
        clearInterval(blurTimer);
      }, 590);
    }

  })

  function moveSun(e) {
    let sun = document.getElementById('sunImg');
    let sunRays = document.getElementById('sunRays');
    let outerRing = document.getElementById('outer-ring');
    let innerRing = document.getElementById('inner-ring');
    //console.log(sun)
    if ((sun !== undefined && sun !== null) && ((sunRays !== undefined && sunRays !== null))) {
      //minus the scroll position of the screen so it's always the same value no matter how far scrolled
      //let scrollPosition = sunContainer.scrollTop;

      let xAxis = ((sunContainer.offsetLeft + (sunContainer.offsetWidth / 2)) - e.clientX) / 90;
      let yAxis = ((sunContainer.offsetTop + (sunContainer.offsetHeight / 2)) - e.clientY) / 90;
      //use currentTarget offsetLeft somehow to fix jaggy? | fixed when paired with scroll position above! :D

      sun.style.transform = `translate(0,0)`
      //sunRays.style.transform = `rotateZ(${(xAxis + yAxis) / 60 + 'deg'}) translate(0,0)`
      outerRing.style.transform = `rotateZ(${(xAxis + yAxis) / 2 + 'deg'}) translate(${(xAxis / 2) + 'px'},${(yAxis / 2) + 'px'})`
      innerRing.style.transform = `rotateZ(${(xAxis + yAxis) / 6 + 'deg'}) translate(${(xAxis / 3) + 'px'},${(yAxis / 3) + 'px'})`
      //sunRays.style.transformOrigin = 'center'

      //console.log(e.clientX)


    }
  }


  return (
    <div onPointerMove={(e) => moveSun(e)} className={utilStyles.allWrapper}>



      {/* <div className={utilStyles.sideMenuWrapper}> */}
      <div id='sideMenuEffect' className={utilStyles.sideMenuEffect}>
        <svg viewBox="0 0 22 412" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="404" fill="transparent" />
          <motion.line id="navLine" x1="11" y1="10" x2="11" y2="403" stroke="rgba(255,255,255,0.6)" strokeWidth="5" strokeLinecap="round" />
          <motion.circle id="navCircle" cx="11" cy="50" r="11" fill="rgba(255,255,255,1)" className={utilStyles.navCircle} animate={{ transform: 'translateY(' + dotStart + ')', filter: blur }} initial={{ transform: 'translateY(-4rem)', filter: 'blur(30px)' }} transition={navTransition} />
        </svg>
      </div>
      <div id='sideMenu' className={utilStyles.sideMenuItems}>

        <Link href="/">
          <motion.a id='mainPage' whileHover="in" animate={router.route === '/' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} onClick={() => setBlur('blur(30px)')} >HOME</motion.a>
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

      <AnimatePresence initial={false} >

        <motion.div className={utilStyles.siteWrapper} key={router.route} initial="pageEnter" animate="center" exit="pageExit" variants={variants}
          transition={{
            y: { ease: "easeInOut", stiffness: 150, damping: 25, duration: 1.5, delay: 0 }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <div className={utilStyles.sunBG}>
        <div id='sunContainer' className={utilStyles.sunRays}>
          <svg width="6467" height="5654" viewBox="0 0 6467 5654" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="sunshine">
              <g id="sunRays">
                <path id="Vector 1" d="M707 2674L707 2977L3412 2848.9L3412 2805.79L707 2674Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 3" d="M1087.6 1405.61L936.098 1668.02L3370.95 2925.86L3392.5 2888.53L1087.6 1405.61Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 4" d="M2155.47 533.561L1889.44 678.599L3296.79 2992.38L3334.64 2971.74L2155.47 533.561Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 10" d="M4367.63 5098.01L4630.04 4946.51L3167.67 2669.79L3130.33 2691.35L4367.63 5098.01Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 5" d="M3385 302H3082L3210.1 2993H3253.21L3385 302Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 11" d="M3079 5352L3382 5352L3253.9 2660L3210.79 2660L3079 5352Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 6" d="M4630.04 712.158L4367.63 560.658L3124.17 2970.6L3161.5 2992.16L4630.04 712.158Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 13" d="M1830.32 4931.73L2092.72 5083.23L3335.66 2674.2L3298.32 2652.65L1830.32 4931.73Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 7" d="M5500.54 1702.5L5349.04 1440.1L3072.9 2902.14L3094.46 2939.48L5500.54 1702.5Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 12" d="M960.732 3965.1L1112.23 4227.5L3396.6 2760.71L3375.04 2723.38L960.732 3965.1Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 8" d="M5757 2977L5757 2674L3054 2802.1L3054 2845.21L5757 2977Z" fill="#FFD600" opacity="0.09" />
                <path id="Vector 9" d="M5393.38 4247.21L5544.88 3984.8L3080.57 2709.95L3059.01 2747.28L5393.38 4247.21Z" fill="#FFD600" opacity="0.09" />
              </g>
              <g id="sunGroup">
                <circle id="sunImg" cx="3233.54" cy="2826.54" r="249.084" fill="#FFF15F" />
                <g style={{ transformOrigin: 'center' }} id="outer-ring">
                  <path id="Ellipse 4" d="M3417.22 3064.61C3458.61 3032.67 3490.96 2990.5 3511.08 2942.26C3531.2 2894.01 3538.4 2841.35 3531.96 2789.47C3525.52 2737.6 3505.68 2688.29 3474.38 2646.42C3443.08 2604.56 3401.4 2571.57 3353.47 2550.72C3305.53 2529.86 3252.99 2521.87 3201.02 2527.51C3149.05 2533.16 3099.45 2552.25 3057.11 2582.91C3014.77 2613.57 2981.15 2654.74 2959.57 2702.35C2937.99 2749.96 2929.2 2802.38 2934.05 2854.42" stroke="#FFAC0A" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Ellipse 7" d="M2943.38 2905.73C2946.61 2917.56 2950.55 2929.17 2955.2 2940.51" stroke="#FFAC0A" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Ellipse 8" d="M2978.82 2986.45C3019.15 3050.68 3082.26 3097.29 3155.51 3116.96C3228.76 3136.63 3306.73 3127.89 3373.81 3092.51" stroke="#FFAC0A" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g style={{ transformOrigin: 'center' }} id="inner-ring">
                  <path id="Ellipse 3" d="M3400.35 2617.15C3356.17 2581.89 3301.96 2561.53 3245.49 2558.97C3189.02 2556.41 3133.2 2571.79 3086.01 2602.91C3038.82 2634.03 3002.69 2679.29 2982.81 2732.2C2962.92 2785.11 2960.29 2842.96 2975.3 2897.46C2990.31 2951.96 3022.19 3000.3 3066.37 3035.57C3110.54 3070.84 3164.75 3091.21 3221.21 3093.78C3277.68 3096.35 3333.51 3080.98 3380.71 3049.87C3427.9 3018.76 3464.03 2973.5 3483.93 2920.59" stroke="#E2DB22" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Ellipse 5" d="M3497.42 2870.37C3500.04 2854.62 3501.25 2838.67 3501.03 2822.7" stroke="#E2DB22" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Ellipse 6" d="M3493.73 2764.16C3483.86 2722.87 3464.32 2684.52 3436.71 2652.28" stroke="#E2DB22" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </g>
            </g>
          </svg>

        </div>
        {/* <div className={utilStyles.theSun}>
          <img id='sunImg' src='/images/sunshine.svg'></img>

        </div> */}

      </div>
    </div>


  )
}

export default MyApp
