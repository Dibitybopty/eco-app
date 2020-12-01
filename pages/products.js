import { motion, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/Products.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Modal from '../components/ProductModel';
import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"
import initFirebase from '../lib/db'
import ProductsLoading from '../components/ProductsLoading'


export default function Products({ productList }) {

  const [showModal, setShowModal] = useState(false);
  const [showModalWithID, setShowModalWithID] = useState('');
  const [products, setProducts] = useState(productList);


  useEffect(() => {
    async function loadData() {

      initFirebase();
      let db = firebase.firestore();
      let tempList = [];
      await db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data().title}`);
          tempList.push(doc.data())

        });
        setProducts(tempList);

        //products.length === 0 ? 'loading...' : products[0].title
      })
    }

    if (products.length === 0) {
      loadData();
    }


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

  const prods = products.map((prod) =>
    <AnimateSharedLayout key={prod.title} >
    
    <Modal id={prod.title} showModal={showModal} showModalWithID={showModalWithID} setShowModal={setShowModal} title={prod.title} productImage={prod.mainImage} details1={prod.details1} details2={prod.details2} details3={prod.details3} image1={prod.subImage1} image2={prod.subImage2} image3={prod.subImage3}  />

    <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>

      <div type='card' className={utilStyles.productCard}>
        <motion.div onClick={() => {
          setShowModalWithID(prod.title)
          setShowModal(!showModal)
          }} layoutId='background' className={utilStyles.productCircle}>
          <div className={utilStyles.productImages}>
            <motion.img layoutId={prod.mainImage}
              src={prod.mainImage}
              width={643}
              height={378}
              alt={prod.title}
            ></motion.img>
          </div>
          <div className={utilStyles.lowerImage}>
            <motion.h3 style={{ display: 'inline-block' }} layoutId={prod.title}>{prod.title}</motion.h3>
            <p>{prod.subtitle}</p>
          </div>

        </motion.div>


        <motion.button onClick={() => {
          setShowModalWithID(prod.title)
          setShowModal(!showModal)
          }} >MORE INFO</motion.button>


      </div>

    </motion.div>
  </AnimateSharedLayout>
  )

  return (
    <Layout products>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.productWrapper}>
        <div id="productBG" className={utilStyles.productBG}>

          <div className={utilStyles.productLeft}></div>
          <motion.div transition={{ duration: 1.7 }} animate='animate' exit='exit' initial='initial' variants={cardAnimations} className={utilStyles.productRight}>

            {products.length === 0 ?
            <>
              {<ProductsLoading />}

              </>
              
              :
            <>{prods}</>
              
            }
            {/* <motion.div variants={cards} onPointerMove={(e) => moveCard(e)} onPointerLeave={(e) => leaveCard(e)} type='cardContainer' className={utilStyles.productCardContainer}>
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
            </motion.div> */}
          </motion.div>



        </div>
      </div>
    </Layout>
  )
}

Products.getInitialProps = async ctx => {
  if (!ctx.req) {
    return { productList: [] };
  }
  //  const email = process.env.NEXT_PUBLIC_FIREBASE_USERNAME
  //  const password = process.env.NEXT_PUBLIC_FIREBASE_PASSWORD
  // initFirebase();
  // await firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then((user) => {
  //     console.log('signed in')
  //     //initFirebase();
  //     let db = firebase.firestore();

  //     db.collection("products").add({
  //       title: "Placeholder 6",
  //       subtitle: "Growatt SP2000 Energy Storage System",
  //       mainImage: "https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/2808c692-52b8-4c30-8d25-5ff6012d3bfe.jpg",
  //       subImage1: "https://i.imgur.com/ffihRxa.jpg",
  //       subImage2: "https://i.imgur.com/ATBftkh.png",
  //       subImage3: "https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/88856af5-df09-417b-8bb9-e91b8c3ad0f1.jpg/:/rs=w:400,h:500,cg:true,m/cr=w:800,h:500,a:cc",
  //       details1: "The SP2000 Energy Storage System stores excess renewable energy power in a Lithium battery storage pack, giving around 4kw of power which can be drawn when the PV panels are not generating. This simple system can be retrofit to most standard Solar PV installations.",
  //       details2: "The Growatt SP2000 Storage System stores DC electricity straight from the PV panels into a Lithium battery storage pack. The Growatt SP2000 Storage System solar battery storage has a useable capacity of 4kw from fully charged. As renewable energy PV power is generated throughout daylight, the controller manages the available renewable energy power and ensures the most efficient use of the PV generated power. Priority is given to the property demands, with the Lithium battery storage being prioritised next and lastly the power will be exported to the grid.",
  //       details3: "Even the stored electricity still goes through the generation meter, so you are still paid for it, the renewable energy power simply comes from the solar battery storage as it is required instead of instantly as it is generated."
  //     })
  //       .then(function (docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     console.log(errorCode, errorMessage)
  //   });



  return { productList: [] }
}