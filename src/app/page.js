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
        <div className={styles.header}>
          <a href='/' className={styles.title}>VIVIENDAS PARA JÓVENES</a>
        </div>
        <Image src="/logotipo-mitmo-miviau.svg" width={334} height={74} />
        <Image src="/image2.png" width={1920} height={200} />
        <Image src="/image3.png" width={210} height={240} />
        <div className={styles.description}>
          <h2 className={styles.subtitle}>PROGRAMAS DE AYUDA Y SUBVENCIÓN A JÓVENES</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.left}>


              <h2 className={styles.subtitle}>COMPRA</h2>

              <p className={styles.text}>CONSIGUE TU AYUDA DE HASTA 10.800 EUROS POR LA COMPRA DE TU PRIMERA VIVIENDA.<br></br> <br></br> CONSIGUE EL 95% DE FINANCIACIÓN EN TU HIPOTECA</p>

              <form className={styles.form}>
                <input type="email" placeholder="Introduce tu email" />
                <button type="submit">Estoy interesado</button>
              </form>
            </div>
            <div className={styles.right}>
              <h2 className={styles.subtitle}>ALQUILER</h2>

              <p className={styles.text}>CONSIGUE TU BONO DE AYUDA DE 6.000 EUROS.<br></br> <br></br> REBAJA HASTA EL 75% LA RENTA</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <Image src="/footer.jpg" width={1920} height={160} />
      </div>
    </main >
  )
}
