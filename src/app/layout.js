import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: 'VIVIENDAS PARA JÓVENES',
  description: 'PROGRAMAS DE AYUDA Y SUBVENCIÓN A JÓVENES',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
