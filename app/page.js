import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Philosophie from '@/components/Philosophie'
import Equipe from '@/components/Equipe'
import Projet from '@/components/Projet'
import Quotidien from '@/components/Quotidien'
import Infos from '@/components/Infos'
import Tarifs from '@/components/Tarifs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophie />
        <Equipe />
        <Projet />
        <Quotidien />
        <Infos />
        <Tarifs />
      </main>
      <Footer />
    </>
  )
}