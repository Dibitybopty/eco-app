import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import utilStyles from '../styles/utils.module.css'
import productStyles from '../styles/Products.module.css'
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

    return (
        <AnimatePresence >
            {showModal && (
                <>
                    <motion.div id="modalBG" onClick={(e) => {
                        if (e.target.id === 'modalBG') setShowModal(!showModal)
                    }} className={utilStyles.modalBackground} variants={backdropVarients} animate="visible" exit="hidden" initial="hidden">
                        <motion.div animate="animate" initial="initial" exit="exit" variants={modalVarients} layoutId='background' className={productStyles.modalProducts} transition={modalTransition}>

                            <div className={productStyles.upperInfo}>
                                <div className={productStyles.modalTitle}><motion.h2 style={{ display: 'inline-block'}} transition={modalTransition} layoutId="title">{text}</motion.h2></div>
                                <div className={productStyles.modalDesc}><p>{someBollox}</p></div>

                                <div className={productStyles.image1}>
                                    <Image
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                        className={productStyles.upperImage}
                                    >

                                    </Image>
                                </div>
                                <div className={productStyles.image2}>
                                    <Image
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                    >

                                    </Image>
                                </div>
                                {/* <div className={productStyles.image3}>
                                    <Image
                                        src='/images/products/battery_alone.jpg'
                                        height={665}
                                        width={600}
                                        alt={text}
                                    >

                                    </Image>
                                </div> */}


                                <div className={productStyles.modalImages} >
                                    <motion.img
                                        layoutId='productImg'
                                        src={productImage}
                                        alt={alt}
                                        animate='animate' initial='initial' exit='exit' variants={modalVarients} transition={modalTransition}

                                    ></motion.img>
                                </div>
                                

                                <div className={productStyles.inputs}>

                                    <label className={productStyles.labelName} >
                                        <input type='text' name='name' required></input>
                                        <span className={productStyles.placeholder}>NAME</span>
                                    </label>
                                    <label className={productStyles.labelName} >
                                        <input type='text' name='email' required></input>
                                        <span className={productStyles.placeholder}>E-MAIL</span>
                                    </label>
                                    <label className={productStyles.labelName} >
                                        <textarea type='text' name='enquire' required></textarea>
                                        <span className={productStyles.placeholder}>HOW CAN WE HELP?</span>
                                    </label>
                                    <button>ENQUIRE</button>
                                </div>
                            </div>
                            {/* <div className={productStyles.lowerInfo}> */}
                            {/* <div className={productStyles.inputs}>

                                    <label className={productStyles.labelName} >
                                        <input type='text' name='name' required></input>
                                        <span className={productStyles.placeholder}>NAME</span>
                                    </label>
                                    <label className={productStyles.labelName} >
                                        <input type='text' name='email' required></input>
                                        <span className={productStyles.placeholder}>E-MAIL</span>
                                    </label>
                                    <label className={productStyles.labelName} >
                                        <textarea type='text' name='enquire'></textarea>
                                        <span className={productStyles.placeholder}>HOW CAN WE HELP?</span>
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