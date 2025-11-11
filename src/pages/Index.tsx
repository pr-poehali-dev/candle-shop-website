import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
