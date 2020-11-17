import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import utilStyles from '../styles/utils.module.css'
import productStyles from '../styles/Products.module.css'
import Image from 'next/image'


export default function ProductModal({ showModal, setShowModal, text, productImage, alt }) {

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
                                <motion.h2 style={{ display: 'inline-block' }} transition={modalTransition} layoutId="title">{text}</motion.h2>

                                <div className={productStyles.modalImages} >
                                    <motion.img
                                        layoutId='productImg'
                                        src={productImage}
                                        width={643}
                                        height={378}
                                        alt={alt}
                                        animate='animate' initial='initial' exit='exit' variants={modalVarients} transition={modalTransition}

                                    ></motion.img>
                                </div>
                            </div>
                            <div className={productStyles.lowerInfo}>
                                <div className={productStyles.inputs}>
                                    <p>Name:</p>
                                    <div className={productStyles.inputWrapper}>
                                        <input type='text' name='name' required></input>
                                        <label className={productStyles.labelName} for='name'></label>
                                    </div>
                                    <p>E-Mail:</p>
                                    <input></input>
                                    <p>Your Enquiry:</p>
                                    <textarea></textarea>
                                    <button>ENQUIRE</button>
                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </>

            )
            }

        </AnimatePresence>
    )
}