import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Catalog from '@/components/Catalog';
import Programs from '@/components/Programs';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Catalog />
        <Programs />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}