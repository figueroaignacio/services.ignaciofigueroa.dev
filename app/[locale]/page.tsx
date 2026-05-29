import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import WhyMe from '@/components/why-me';
import Services from '@/components/services';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
