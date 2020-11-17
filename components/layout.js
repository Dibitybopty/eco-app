import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Component, useEffect } from 'react'
import Products from '../pages/products'

//TODO Make pages act like they're scrolling with transitions, so it seems like one big page.
//TODO Change content based on weather with a weather API.

export const siteTitle = 'Eco Sales';

export default function Layout({ children, home, products, contactus, gallery }) {

    // useEffect(() => {
    //     const sun = document.getElementById('sun');
    //     window.addEventListener('mousemove', (e) => {
    //         //if(e.x < window.innerWidth - 200 && e.y < window.innerHeight - 200){
    //         sun.style.left = (e.x - 175) + 'px';
    //         sun.style.top = (e.y - 175) + 'px';
    //         // }


    //     })
    //     window.addEventListener('mouseout', (e) => {
    //         sun.style.left = '0px';
    //         sun.style.top = '0px';
    //     })
    // })

    return (
        <div>
            

            {home && (
                <div className={utilStyles.contactbg} >

                        {children}

                </div>
                )}
                
            {products && (
                <div className={styles.pageContent} >



                    <div>{children}</div>


                </div>

            )}

            {gallery && (
                <>
                    <div className={utilStyles.contactbg}>

                        <div className={utilStyles.contactInnerLeft}></div>
                        <div className={utilStyles.contactInnerRight}>
                            <div className={utilStyles.productsSvg}>
                                <object data="/images/undraw_art_edited.svg"></object>
                            </div>

                        </div>

                    </div>
                    {children}

                </>
            )}

            {contactus && (
                <>

                    {children}
                </>
            )}

        </div>
    )


}
