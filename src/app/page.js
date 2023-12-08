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
        <div className={styles.description}>
          <h2 className={styles.subtitle}>PROGRAMAS DE AYUDA Y SUBVENCIÓN A JÓVENES</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.left}>


              <h2 className={styles.subtitle}>COMPRA</h2>

              <p className={styles.text}>CONSIGUE TU AYUDA DE HASTA 10.800 EUROS POR LA COMPRA DE TU PRIMERA VIVIENDA.<br></br> <br></br> CONSIGUE EL 95% DE FINANCIACIÓN EN TU HIPOTECA.</p>

              <div style={{ display: 'flex', backgroundColor: 'white', border: '5px solid black', padding: '20px', borderRadius: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
                  <Image src="/logotipo-mitmo-miviau.svg" width={335} height={74} />
                  <Image src="/image2.png" width={335} height={74} />
                </div>
                <Image src="/image3.png" width={130} height={148} />
              </div>
            </div>
            <div className={styles.right}>
              <h2 className={styles.subtitle}>ALQUILER</h2>

              <p className={styles.text}>CONSIGUE TU BONO DE AYUDA DE 6.000 EUROS.<br></br> <br></br> <br></br> REBAJA HASTA EL 75% LA RENTA.</p>

              <Image src='/alquiler.jpeg' width={395} height={208} />
            </div>
          </div>
          <form className={styles.form}>
            <input type="email" placeholder="Introduce tu email" />
            <input type="text" placeholder="Introduce tu nombre" />
            <input type="tel" placeholder="Introduce tu teléfono" />
            <button type="submit">Estoy interesado</button>
          </form>
        </div>
      </section>
      <div className={styles.footer}>
        <Image src="/footer.jpg" width={1920} height={160} />
        <p>Todas las imágenes y logos son propiedad de sus factores. Son utilizados en la web para una mejora en la identificación de los servicios privados a prestar por VIVIENDASPARAJÓVENES + AYUDAYSUBVENCIÓN por la consultora de abogados y economistas Winner Markets S.L. con CIF B84148741. <br></br> © 2023-2024 VIVIENDASPARAJOVENES.COM</p>
      </div>
    </main >
  )
}
