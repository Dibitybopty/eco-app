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
    hover: {
      WebkitTextStroke: '0px #fff',
      WebkitTextFillColor: 'rgba(105,205,60,1)',
      transition: {
        delay: 0,
        duration: 0.3
      }
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

  // var dotStart = '0rem';

  // if (router.route === '/products') {
  //   dotStart = '6.5rem';

  // } else if (router.route === '/gallery') {
  //   dotStart = '12.99rem'
  // } else if (router.route === '/contactus') {
  //   dotStart = '19.7rem'
  // }


  useEffect(() => {
    window.addEventListener('load', (event) => {
      if (document.readyState === 'complete') {
        let allWrapper = document.getElementById('allWrapper');
        let sunGroup = document.getElementById('sunGroup');

        allWrapper.addEventListener('mousemove', (e) => {

          let xAxis = ((allWrapper.offsetLeft + (allWrapper.offsetWidth / 2)) - e.pageX) / 90;
          let yAxis = ((allWrapper.offsetTop + (allWrapper.offsetHeight / 2)) - e.pageY) / 90;

          sunGroup.style.transform = `translate(${xAxis}px,${yAxis}px)`

          //console.log(e)
        })
      }

    })

  })

  function moveSun(e) {
    let sunGroup = document.getElementById('sunGroup');
    let sunContainer = document.getElementById('sunContainer');
    //let sun = document.getElementById('sunImg');
    let sunRays = document.getElementById('sunRays');
    // let outerRing = document.getElementById('outer-ring');
    // let innerRing = document.getElementById('inner-ring');
    //console.log(sun)
    if ((sunGroup !== undefined && sunGroup !== null) && ((sunRays !== undefined && sunRays !== null))) {
      //minus the scroll position of the screen so it's always the same value no matter how far scrolled
      //let scrollPosition = sunContainer.scrollTop;

      let xAxis = ((sunContainer.offsetLeft + (sunContainer.offsetWidth / 2)) - e.clientX) / 90;
      let yAxis = ((sunContainer.offsetTop + (sunContainer.offsetHeight / 2)) - e.clientY) / 90;
      //use currentTarget offsetLeft somehow to fix jaggy? | fixed when paired with scroll position above! :D

      //sun.style.transform = `translate(0,0)`
      //sunRays.style.transform = `rotateZ(${(xAxis + yAxis) / 60 + 'deg'}) translate(0,0)`
      //outerRing.style.transform = `rotateZ(${(xAxis + yAxis) / 2 + 'deg'}) translate(${(xAxis / 2) + 'px'},${(yAxis / 2) + 'px'})`
      sunGroup.style.transform = `translate(${xAxis}px,${yAxis}px)`
      //innerRing.style.transform = `rotateZ(${(xAxis + yAxis) / 6 + 'deg'}) translate(${(xAxis / 3) + 'px'},${(yAxis / 3) + 'px'})`
      //sunRays.style.transformOrigin = 'center'

      //console.log(e.clientX)


    }
  }


  return (
    <div id='allWrapper' className={utilStyles.allWrapper}>


      <div id='sideMenuEffect' className={utilStyles.sideMenuEffect}>

      </div>
      <div id='sideMenu' className={utilStyles.sideMenuItems}>

        <Link href="/">
          <motion.a whileHover="hover" animate={router.route === '/' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition}  >HOME</motion.a>
        </Link>

        <Link href="products">
          <motion.a whileHover="hover" animate={router.route === '/products' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} >PRODUCTS</motion.a>
        </Link>

        <Link href="gallery">
          <motion.a whileHover="hover" animate={router.route === '/gallery' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} >GALLERY</motion.a>
        </Link>

        <Link href="contactus">
          <motion.a whileHover="hover" animate={router.route === '/contactus' ? "in" : "out"} initial="initial" variants={linkEffects} transition={transition} >CONTACT US</motion.a>
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

      <div id='sunBG' className={utilStyles.sunBG}>
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
              <g style={{ transformOrigin: 'center' }} id="sunGroup">
                <circle id="sunImg" cx="3233.54" cy="2826.54" r="249.084" fill="#ECFA24" />
                <g id="outer-ring">
                  <path id="Ellipse 7" d="M2957.04 2902.37C2960.11 2913.61 2963.87 2924.66 2968.29 2935.45" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Ellipse 8" d="M2990.75 2979.15C3029.11 3040.24 3089.15 3084.58 3158.82 3103.28C3228.49 3121.99 3302.66 3113.68 3366.46 3080.03" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Ellipse 4" d="M3407.75 3053.49C3378.01 3076.43 3344.04 3093.3 3307.78 3103.12C3271.52 3112.94 3233.68 3115.52 3196.42 3110.72C3159.16 3105.92 3123.21 3093.82 3090.63 3075.12C3058.05 3056.43 3029.46 3031.5 3006.51 3001.75C2983.57 2972.01 2966.7 2938.04 2956.88 2901.78C2947.06 2865.52 2944.48 2827.68 2949.28 2790.42C2954.08 2753.16 2966.18 2717.21 2984.88 2684.63C3003.57 2652.05 3028.5 2623.46 3058.25 2600.51C3087.99 2577.57 3121.96 2560.7 3158.22 2550.88C3194.48 2541.06 3232.32 2538.48 3269.58 2543.28C3306.84 2548.08 3342.79 2560.18 3375.37 2578.88C3407.95 2597.57 3436.54 2622.5 3459.49 2652.25C3482.43 2681.99 3499.3 2715.96 3509.12 2752.22C3518.94 2788.48 3521.52 2826.32 3516.72 2863.58C3511.92 2900.84 3499.82 2936.79 3481.12 2969.37C3462.43 3001.95 3437.5 3030.54 3407.75 3053.49L3407.75 3053.49Z" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <g id="inner-ring">
                  <path id="Ellipse 5" d="M3495.33 2870.81C3497.93 2855.17 3499.13 2839.32 3498.92 2823.47" stroke="#E2DB22" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Ellipse 6" d="M3491.66 2765.34C3481.86 2724.34 3462.46 2686.26 3435.04 2654.24" stroke="#E2DB22" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Ellipse 3" d="M3397.99 2618.6C3425.37 2640.25 3448.22 2667.09 3465.23 2697.57C3482.25 2728.05 3493.09 2761.58 3497.14 2796.26C3501.2 2830.93 3498.38 2866.06 3488.86 2899.64C3479.33 2933.23 3463.29 2964.6 3441.64 2991.99C3419.99 3019.37 3393.15 3042.22 3362.67 3059.23C3332.19 3076.25 3298.66 3087.09 3263.99 3091.14C3229.31 3095.2 3194.18 3092.38 3160.6 3082.86C3127.02 3073.33 3095.64 3057.29 3068.25 3035.64C3040.87 3013.99 3018.02 2987.15 3001.01 2956.67C2983.99 2926.19 2973.15 2892.66 2969.1 2857.99C2965.04 2823.31 2967.86 2788.18 2977.38 2754.6C2986.91 2721.02 3002.95 2689.64 3024.6 2662.25C3046.25 2634.87 3073.09 2612.02 3103.57 2595.01C3134.05 2577.99 3167.58 2567.15 3202.26 2563.1C3236.93 2559.04 3272.06 2561.86 3305.64 2571.38C3339.23 2580.91 3370.6 2596.95 3397.99 2618.6L3397.99 2618.6Z" stroke="#F7D625" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </g>
          </svg>

        </div>

      </div>
    </div>


  )
}

export default MyApp
