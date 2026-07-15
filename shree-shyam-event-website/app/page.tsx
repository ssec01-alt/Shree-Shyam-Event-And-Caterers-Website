import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Owner from "@/components/Owner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <PageReveal>
        <Navbar />
        <Hero />
        <About />
        <Owner />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </PageReveal>
    </>
  );
}
