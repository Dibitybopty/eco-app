import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import utilStyles from '../styles/utils.module.css'
// import utilStyles from '../styles/Products.module.css'
import Image from 'next/image'



export default function ProductModal({ showModal, setShowModal, text, productImage, alt }) {

    const someBollox = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mauris eget risus posuere euismod ac scelerisque lectus. In libero augue, pellentesque et ultrices sit amet, consequat fermentum arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque tempus, purus id molestie egestas, eros dolor gravida orci, et imperdiet dolor velit eu ipsum. Vestibulum ac enim tortor. Donec venenatis lacinia lectus in pretium. Sed bibendum consectetur leo vitae blandit. In at elementum tortor. Pellentesque et ipsum justo. ";

    const backdropVarients = {
        visible: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '337'
        },
        hidden: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: '337'
        }
    }

    const modalTransition = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const modalVarients = {
        animate: {
            x: 0,
            opacity: 1
        },
        initial: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 0,
            opacity: 1
        }
    }

    const imageVarients = {
        animate: {
            y: 0
        },
        exit: {
            y: -200
        },
        initial: {
            y: -200
        }
    }

    return (
        <AnimatePresence >
            {showModal && (
                <>
                    <motion.div id="modalBG" onClick={(e) => {
                        if (e.target.id === 'modalBG') setShowModal(!showModal)
                    }} className={utilStyles.modalBackground} variants={backdropVarients} animate="visible" exit="hidden" initial="hidden">
                        <motion.div animate="animate" initial="initial" exit="exit" variants={modalVarients} layoutId='background' className={utilStyles.modalProducts} transition={modalTransition}>

                            <div className={utilStyles.upperInfo}>
                                {/* <div className={utilStyles.fabFlip}>
                                    <div className={utilStyles.arrowRight}></div>
                                </div> */}
                                <div className={utilStyles.modalTitle}><motion.h2 style={{ display: 'inline-block' }} transition={modalTransition} layoutId="title">{text}</motion.h2></div>

                                <motion.div animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }} initial={{ y: -200, opacity: 0 }} transition={modalTransition} className={utilStyles.modalDesc}><p>{someBollox}</p></motion.div>

                                <motion.div animate='animate' exit='exit' initial='initial' variants={imageVarients} transition={modalTransition} className={utilStyles.image1}>
                                    <Image
                                    
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                        
                                    >

                                    </Image>
                                </motion.div>
                                <motion.div animate='animate' exit='exit' initial='initial' variants={imageVarients} transition={modalTransition} className={utilStyles.image2}>
                                    <Image
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                        
                                    >

                                    </Image>
                                </motion.div>
                                <motion.div animate='animate' exit='exit' initial='initial' variants={imageVarients} transition={modalTransition} className={utilStyles.image3}>
                                    <Image
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                    >

                                    </Image>
                                </motion.div>


                                <div className={utilStyles.modalImages} >
                                    <motion.img
                                        layoutId='productImg'
                                        src={productImage}
                                        alt={alt}
                                        animate='animate' initial='initial' exit='exit' variants={modalVarients} transition={modalTransition}

                                    ></motion.img>
                                </div>


                                {/* <div className={utilStyles.inputs}>

                                    <label className={utilStyles.labelName} >
                                        <input type='text' name='name' required></input>
                                        <span className={utilStyles.placeholder}>NAME</span>
                                    </label>
                                    <label className={utilStyles.labelName} >
                                        <input type='text' name='email' required></input>
                                        <span className={utilStyles.placeholder}>E-MAIL</span>
                                    </label>
                                    <label className={utilStyles.labelName} >
                                        <textarea type='text' name='enquire' required></textarea>
                                        <span className={utilStyles.placeholder}>HOW CAN WE HELP?</span>
                                    </label>
                                    <button>ENQUIRE</button>
                                </div> */}
                            </div>
                            {/* <div className={utilStyles.lowerInfo}> */}
                            {/* <div className={utilStyles.inputs}>

                                    <label className={utilStyles.labelName} >
                                        <input type='text' name='name' required></input>
                                        <span className={utilStyles.placeholder}>NAME</span>
                                    </label>
                                    <label className={utilStyles.labelName} >
                                        <input type='text' name='email' required></input>
                                        <span className={utilStyles.placeholder}>E-MAIL</span>
                                    </label>
                                    <label className={utilStyles.labelName} >
                                        <textarea type='text' name='enquire'></textarea>
                                        <span className={utilStyles.placeholder}>HOW CAN WE HELP?</span>
                                    </label>
                                    <button>ENQUIRE</button>
                                </div> */}

                            {/* </div> */}

                        </motion.div>

                    </motion.div>

                </>

            )
            }

        </AnimatePresence>
    )
}