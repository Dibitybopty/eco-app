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
            opacity: 1,
            transition: {
                delay: 0,
                duration: 0
            }
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

    function rotateEnquire(e) {
        const card = e.currentTarget.offsetParent.offsetParent;
        card.style.transition = 'ease 1.5s'
        card.style.transform === 'rotateY(180deg)' ? card.style.transform = 'rotateY(0deg)' : card.style.transform = 'rotateY(180deg)'
    }

    function closeModal(e){
        const card = e.currentTarget.offsetParent.offsetParent;
        card.style.transform === 'rotateY(180deg)' ? card.style.transform = 'rotateY(0deg)' : card.style.transform = 'rotateY(180deg)'
        card.style.transform = '';
        card.style.transition = '';
        setShowModal(!showModal);
    }

    return (
        <AnimatePresence >
            {showModal && (
                <>
                    <motion.div id="modalBG" onClick={(e) => {
                        if (e.target.id === 'modalBG') setShowModal(!showModal)
                    }} className={utilStyles.modalBackground} variants={backdropVarients} animate="visible" exit="hidden" initial="hidden">

                        <motion.div animate="animate" initial="initial" exit="exit" variants={modalVarients} layoutId='background' className={utilStyles.modalProducts} transition={modalTransition}>
                            <div className={utilStyles.modalProdWrapper}>
                                <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0, transition: { delay: 0, duration: 0 } }} transition={{ delay: 0.39 }} onClick={(e) => closeModal(e)} className={utilStyles.fabFlip}>
                                    <div className={utilStyles.exitButton}>
                                        <svg viewBox="0 0 24 24" focusable="false" ><path fill="black" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                                    </div>
                                </motion.div>
                                <motion.div onClick={(e) => rotateEnquire(e)} animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0, transition: { delay: 0, duration: 0 } }} transition={{ delay: 0.39 }} className={utilStyles.fabFlipButton}>
                                    <div className={utilStyles.arrowRight}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.99255 11.0159C4.44027 11.0159 3.99255 10.5682 3.99255 10.0159C3.99255 9.6585 4.18004 9.3449 4.46202 9.16807L7.14964 6.48045C7.54016 6.08993 8.17333 6.08993 8.56385 6.48045C8.95438 6.87098 8.95438 7.50414 8.56385 7.89467L7.44263 9.0159L14.9926 9.01589C15.5448 9.01589 15.9926 9.46361 15.9926 10.0159C15.9926 10.5682 15.5448 11.0159 14.9926 11.0159L5.042 11.0159C5.03288 11.016 5.02376 11.016 5.01464 11.0159H4.99255Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M19.0074 12.9841C19.5597 12.9841 20.0074 13.4318 20.0074 13.9841C20.0074 14.3415 19.82 14.6551 19.538 14.8319L16.8504 17.5195C16.4598 17.9101 15.8267 17.9101 15.4361 17.5195C15.0456 17.129 15.0456 16.4958 15.4361 16.1053L16.5574 14.9841H9.00745C8.45516 14.9841 8.00745 14.5364 8.00745 13.9841C8.00745 13.4318 8.45516 12.9841 9.00745 12.9841L18.958 12.9841C18.9671 12.984 18.9762 12.984 18.9854 12.9841H19.0074Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                                <div className={utilStyles.upperInfo}>

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



                                </div>

                            </div>

                            <div className={utilStyles.modelBackside}>
                                <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0, transition: { delay: 0, duration: 0 } }} transition={{ delay: 0.39 }} onClick={(e) => closeModal(e)} className={utilStyles.fabFlip}>
                                    <div className={utilStyles.exitButton}>
                                        <svg viewBox="0 0 24 24" focusable="false" ><path fill="black" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                                    </div>
                                </motion.div>

                                <div className={utilStyles.inputs}>
                                    <p>{text}</p>

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
                                    <span>Or Telephone on:</span>
                                    <span>01782 256805</span>
                                    <motion.div onClick={(e) => rotateEnquire(e)} animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0, transition: { delay: 0, duration: 0 } }} transition={{ delay: 0.39 }} className={utilStyles.fabFlipButton}>

                                        <div className={utilStyles.arrowRight}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.99255 11.0159C4.44027 11.0159 3.99255 10.5682 3.99255 10.0159C3.99255 9.6585 4.18004 9.3449 4.46202 9.16807L7.14964 6.48045C7.54016 6.08993 8.17333 6.08993 8.56385 6.48045C8.95438 6.87098 8.95438 7.50414 8.56385 7.89467L7.44263 9.0159L14.9926 9.01589C15.5448 9.01589 15.9926 9.46361 15.9926 10.0159C15.9926 10.5682 15.5448 11.0159 14.9926 11.0159L5.042 11.0159C5.03288 11.016 5.02376 11.016 5.01464 11.0159H4.99255Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M19.0074 12.9841C19.5597 12.9841 20.0074 13.4318 20.0074 13.9841C20.0074 14.3415 19.82 14.6551 19.538 14.8319L16.8504 17.5195C16.4598 17.9101 15.8267 17.9101 15.4361 17.5195C15.0456 17.129 15.0456 16.4958 15.4361 16.1053L16.5574 14.9841H9.00745C8.45516 14.9841 8.00745 14.5364 8.00745 13.9841C8.00745 13.4318 8.45516 12.9841 9.00745 12.9841L18.958 12.9841C18.9671 12.984 18.9762 12.984 18.9854 12.9841H19.0074Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </motion.div>
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