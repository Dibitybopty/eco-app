import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import utilStyles from '../styles/utils.module.css'

export default function Modal({ showModal, setShowModal, text }) {

    const backdropVarients = {
        visible: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '337',

        },
        hidden: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: '337',
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

    const inputsVarients = {
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
            }
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.32,
                staggerChildren: 0.2,
            }
        }
    }

    const item = {
        exit: { opacity: 0 },
        animate: { opacity: 1 }
    }

    const [inputWidth, setInputWidth] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            document.documentElement.clientWidth < 768 ? setInputWidth(true) : setInputWidth(false);
        })
    })

    return (
        <AnimatePresence >
            {showModal && (
                <>
                    <motion.div id="modalBG" onClick={(e) => {
                        if (e.target.id === 'modalBG') setShowModal(!showModal)
                    }} className={utilStyles.modalBackground} variants={backdropVarients} animate="visible" exit="hidden" initial="hidden">
                        <motion.div animate="animate" initial="initial" exit="exit" variants={modalVarients} layoutId="banner" className={utilStyles.modal} transition={modalTransition}>
                            <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0, transition: { delay: 0, duration: 0 } }} transition={{ delay: 0.39 }} onClick={(e) => setShowModal(!showModal)} className={utilStyles.fabFlip}>
                                <div className={utilStyles.exitButton}>
                                    <svg viewBox="0 0 24 24" focusable="false" ><path fill="black" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                                </div>
                            </motion.div>
                            <motion.h2 style={{ display: 'inline-block' }} transition={modalTransition} layoutId="title">{text}</motion.h2>
                            <motion.div variants={inputsVarients} animate="animate" initial="exit" exit="exit" style={{ width: inputWidth ? '80%' : '60%' }} className={utilStyles.inputs}>
                                <motion.label variants={item} className={utilStyles.labelName} >
                                    <motion.input type='text' name='name' required></motion.input>
                                    <motion.span style={{ color: 'black' }} className={utilStyles.placeholder}>NAME</motion.span>
                                </motion.label>
                                <motion.label variants={item} className={utilStyles.labelName} >
                                    <motion.input type='text' name='email' required></motion.input>
                                    <motion.span style={{ color: 'black' }} className={utilStyles.placeholder}>E-MAIL</motion.span>
                                </motion.label>
                                <motion.label variants={item} className={utilStyles.labelName} >
                                    <motion.textarea type='text' name='enquire' required></motion.textarea>
                                    <motion.span style={{ color: 'black' }} className={utilStyles.placeholder}>HOW CAN WE HELP?</motion.span>
                                </motion.label>
                                <motion.button variants={item} style={{ backgroundColor: '#309b00', border: '1px solid black' }} >ENQUIRE</motion.button>
                            </motion.div>

                        </motion.div>

                    </motion.div>

                </>

            )
            }

        </AnimatePresence>
    )
}