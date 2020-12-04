import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Gallery() {

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


  return (
    <Layout gallery>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.galleryWrapper}>
        <div className={utilStyles.galleryHeader}><h1>Eco Sales - Photo Gallery</h1></div>

        <motion.div transition={{ duration: 1.7 }} animate='animate' exit='exit' initial='initial' variants={cardAnimations} className={utilStyles.gallery}>

          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
          <motion.div variants={cards} className={utilStyles.galleryGroup}>
            <Image layout='fill' objectFit="cover" className={utilStyles.galleryImages} src='https://img1.wsimg.com/isteam/ip/15b1b8e3-2dc8-4905-bc55-7e810b2a928f/df933c83-c5e1-4c29-b701-864d40905bd7.jpg/:/rs=w:1300px,h:800px' alt='solar house'></Image>
            <div className={utilStyles.galleryIcons}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"

                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}