import { motion } from "framer-motion";
import utilStyles from '../styles/utils.module.css'

export default function ProductsLoading() {

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
      opacity: 1,
      transition: {
        duration: 1
      }

    },
    initial: {
      opacity: 0,

    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.7,
        delayChildren: 0
      }

    }
  }

  return (
    <>

      {/* <div className={utilStyles.loadingProducts}>
        <img src='/images/products/loading-products.svg'></img>
        <div className={utilStyles.loadingProductsCircle}></div>
        <div className={utilStyles.ldsRing}></div>
      </div> */}

      <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>

              <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

                <div type='card' className={utilStyles.productCard}>
                  <div className={utilStyles.ldsRing}></div>


                </div>


              </motion.div>
    </>
  )
}