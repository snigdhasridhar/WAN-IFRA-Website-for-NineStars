import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRulerCombined, FaUserTie, FaCamera } from 'react-icons/fa';
import { GrIntegration } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialHive } from "react-icons/gi";

import { LiaLanguageSolid } from "react-icons/lia";




const WhatWeDo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <GrIntegration size={40} />,
      title: 'Integrated Workflows:',
      description: 'Eliminate redundancy. Integrate content and data from print, digital, and advertising functions with AI-led continuity.'
    },
    {
      icon: <CgWebsite size={40} />,
      title: 'Real-Time Responsiveness',
      description: 'Equip editors with predictive insights, not just retrospective analytics.'
    },
    {
      icon: <LiaLanguageSolid size={40} />,
      title: 'Scalable Editorial Judgment',
      description: 'Use AI to enhance, not override, human editorial values.'
    },
    {
      icon: <GiArtificialHive size={40} style={{marginTop:"5px"}} />,
      title: 'AI-Ready Infrastructure',
      description: ' Build systems designed to evolve with AI, not just react to it.'
    }
  ];

  return (
    <section className="what-we-do py-5" ref={ref}>
      <div className="container text-center">
        <motion.h2 
          className="display-5 fw-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          What we do
        </motion.h2>
        {/* <motion.p 
          className="lead mb-5"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </motion.p> */}
        
        <motion.div 
          className="row mt-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="col-md-3 mb-4"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon mb-4">
                {service.icon}
              </div>
              <h4 className="mb-3">{service.title}</h4>
              <p className="text-muted px-4" 
              >{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;