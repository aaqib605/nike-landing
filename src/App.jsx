import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
import AnimatedSection from "./sections/AnimatedSection";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <AnimatedSection className="padding">
        <PopularProducts />
      </AnimatedSection>
      <section className="padding">
        <SuperQuality />
      </section>
      <AnimatedSection className="padding-x py-10">
        <Services />
      </AnimatedSection>
      <AnimatedSection className="padding">
        <SpecialOffer />
      </AnimatedSection>
      <AnimatedSection className="bg-pale-blue padding">
        <CustomerReviews />
      </AnimatedSection>
      <AnimatedSection className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </AnimatedSection>
      <AnimatedSection className="bg-black padding-x padding-t pb-8">
        <Footer />
      </AnimatedSection>
    </main>
  );
};

export default App;
