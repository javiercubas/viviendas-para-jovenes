"use client";

import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [menu, setMenu] = useState(false)

  const handleMenuClick = () => {
    setMenu(!menu)
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.background}>
          <Image src="/estadio.webp" width={1920} height={750} />
        </div>
        <div className={styles.header}>
          <a href='/' className={styles.title}><Image src="/matchmaker.png" width={40} height={40} />Matchmaker<span>.</span></a>
          {/* <div className={styles.hamburger} onClick={handleMenuClick}>
            <AiOutlineMenu size={32} color="white" />
          </div>
          <nav className={styles.nav + (menu ? ' ' + styles.active : '')}>
            <a href="#">Inicio</a>
            <a href="#features">Funcionalidades</a>
            <a href="#">Nuestra historia</a>
            <a href="#">Contacto</a>
          </nav> */}
        </div>
        <div className={styles.description}>
          <div className={styles.left}>
            <h2 className={styles.subtitle}>PROGRAMAS DE AYUDA Y SUBVENCIÓN A JÓVENES</h2>
            <p className={styles.text}>CONSIGUE TU AYUDA DE HASTA 10800 EUROS POR LA COMPRA DE TU PRIMERA VIVIENDA.<br></br> <br></br> CONSIGUE EL 95% DE FINANCIACIÓN EN TU HIPOTECA</p>
            <form className={styles.form}>
              <input type="email" placeholder="Introduce tu email" />
              <button type="submit">Estoy interesado</button>
            </form>
          </div>
          <div className={styles.right}>
            <Image src="/phone.png" width={260} height={500} />
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <Image src="/footer.jpg" width={1920} height={160} />
      </div>
    </main >
  )
}
