import AboutMe from './home/partials/about-me';
import ContactMe from './home/partials/contact-me';
import Experience from './home/partials/experience';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Portfolio from './home/partials/portfolio';
import Service from './home/partials/service';
import Skills from './home/partials/skills';
import Testimonial from './home/partials/testimonial';
import WhyChooseMe from './home/partials/why-choose-me';

export default function Home() {
  return (
    <div className='custom-container flex min-h-screen flex-col bg-black'>
      <Navbar />
      <Hero />
      <Service />
      <AboutMe />
      <Skills />
      <WhyChooseMe />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Faq />
      <ContactMe />
      <Footer />
    </div>
  );
}
