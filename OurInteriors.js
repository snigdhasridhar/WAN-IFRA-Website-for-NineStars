import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurInteriors = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Define rotation transformations for the top row images
  const rotateFirst = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const rotateSecond = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const rotateThird = useTransform(scrollYProgress, [0, 1], [10, 0]);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      rotate: rotateFirst
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      rotate: rotateSecond
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      rotate: rotateThird
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      rotate: 0
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      rotate: 0
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="our-interiors py-5"
      style={{ backgroundColor: '#F8F5F1' }}
    >
      <div className="container text-center">
        <motion.h2
          className="display-5 fw-bold mb-2"
          style={{ color: '#111' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Interiors.
        </motion.h2>
        <motion.p
          className="lead mb-5"
          style={{ color: '#555' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We've worked on interiors for 5,000+ clients. See a preview of our work below.
        </motion.p>

        {/* Top Row: 3 Images */}
        <div className="row g-4 justify-content-center mb-4">
          {images.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              style={{ rotate: image.rotate }}
            >
              <div className="interior-card overflow-hidden rounded">
                <img
                  src={image.src}
                  alt={`Interior ${index + 1}`}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ borderRadius: '12px', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 2 Images */}
        <div className="row g-4 justify-content-center">
          {images.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              className="col-md-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="interior-card overflow-hidden rounded">
                <img
                  src={image.src}
                  alt={`Interior ${index + 4}`}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ borderRadius: '12px', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="btn btn-dark mt-5 px-4 py-2"
          style={{ borderRadius: '8px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View more work
        </motion.button>
      </div>
    </section>
  );
};

export default OurInteriors;
