import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Component
import { PageHead } from '../components/heading'

export default function Home() {
  return (
     <>

      <PageHead />

      <div className={styles.container}>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Blah  <a href="https://youtube.com">Alex Cain  dncdcndlcdcddnndndnd ddddddddddddddddddddddddddddd</a>
        </h1>

      </main>

      {/* <footer className={styles.footer}>
        <a>
          Copyright © 2021 Alexander Christopher Cain
        </a>
      </footer> */}
    </div>

    </>

  )
}
