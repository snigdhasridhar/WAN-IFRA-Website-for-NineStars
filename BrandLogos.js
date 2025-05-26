import React from 'react';
import { motion } from 'framer-motion';

const BrandLogos = () => {
  const logos = [
    { name: 'feather', width: 100 },
    { name: 'MADE', width: 80 },
    { name: 'habitat', width: 100 },
    { name: 'dwell', width: 90 },
    { name: 'west elm', width: 110 }
  ];

  return (
    <section className="brand-logos py-5">
      <div className="container">
        <div className="row justify-content-center">
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="col text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <h5 className="logo-text" style={{ width: logo.width }}>{logo.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;