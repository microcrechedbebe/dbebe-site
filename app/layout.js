import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Micro-Crèche D'BEBE | Besançon',
  description: 'Accueil de enfants de 10 semaines à 4 ans. Un cocon d'éveil où chaque enfant s'épanouit à son rythme.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}