import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

//TODO Make pages act like they're scrolling with transitions, so it seems like one big page.
//TODO Change content based on weather with a weather API.

export const siteTitle = 'Eco Sales';

export default function Layout({ children, home, products, contactus, gallery }) {

    return (
        <div>
            

            {home && (
                <div className={styles.pageContent} >

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
