import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="call-to-action py-3" ref={ref}>
      <div className="container text-center">
        <motion.h2 
          className="display-5 fw-bold mb-4"
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
Your newsroom. Our AI.<br/> Let’s build the future together.
        </motion.h2>
        {/* <motion.p 
          className="lead mb-5 mx-auto" 
          style={{ maxWidth: '700px' }}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
        </motion.p> */}
        
        {/* <motion.button 
          className="btn btn-dark px-4 py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.4 }
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button> */}
      </div>
    </section>
  );
};

export default CallToAction;