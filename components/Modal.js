import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'

export default function Modal({ showModal, setShowModal, text }) {

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
            x: text === 'E-MAIL US' ? 1000 : 0,
            opacity: text === 'E-MAIL US' ? 0 : 1
        },
        exit: {
            x: text === 'E-MAIL US' ? 1000 : 0,
            opacity: text === 'E-MAIL US' ? 0 : 1
        }
    }

    return (
        <AnimatePresence >
            {showModal && (
                <>
                    <motion.div id="modalBG" onClick={(e) => {
                        if(e.target.id === 'modalBG') setShowModal(!showModal)
                    }} className={homeStyles.modalBackground} variants={backdropVarients} animate="visible" exit="hidden" initial="hidden">
                        <motion.div animate="animate" initial="initial" exit="exit" variants={modalVarients} layoutId="banner" className={homeStyles.modal} transition={modalTransition}>
                            <motion.h2 style={{display: 'inline-block'}} transition={modalTransition} layoutId="title">{text}</motion.h2>

                        </motion.div>

                    </motion.div>

                </>

            )
            }

        </AnimatePresence>
    )
}