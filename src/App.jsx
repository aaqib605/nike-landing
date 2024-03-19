import { motion } from "framer-motion";
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

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="padding"
      >
        <PopularProducts />
      </motion.section>
      <motion.section className="padding">
        <SuperQuality />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="padding-x py-10"
      >
        <Services />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="padding"
      >
        <SpecialOffer />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="bg-pale-blue padding"
      >
        <CustomerReviews />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="padding-x sm:py-32 py-16 w-full"
      >
        <Subscribe />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="bg-black padding-x padding-t pb-8"
      >
        <Footer />
      </motion.section>
    </main>
  );
};

export default App;
