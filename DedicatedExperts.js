import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import HeroImage from '../assets/AOTM.png';
import circleImage from '../assets/AOTM infographic_11.png';
import backgroundImage from '../assets/DedicatedExpertsCarousel.png';

const cards = [
  {
    title: 'Custom AI R&D',
    content:
      'Collaborate with our innovation team to create newsroom-first tools that suit your workflows, from research to deployment.',
  },
  {
    title: "Scholar AI",
    content:
      'Deep research at editorial speed—tap into years of archives and sources instantly, across any format.',
  },
  {
    title: 'AOTM GPT',
    content:
      'Generative AI trained for publishers: write, summarize, and adapt content while respecting editorial standards.',
  },
  {
    title: 'AOTM ICP',
    content:
      'A unified platform that processes and indexes all content types—text, audio, video, and scanned archives—for multichannel delivery.',
  },
  {
    title: 'Language Intelligence',
    content:
      'Supports 60+ languages with regional idioms, tone shifts, and semantic accuracy.',
  },
  {
    title: 'Analytics & Personalization',
    content:
      'Gain insights into narrative performance, personalize content and ads, and re-monetize archives for long-tail revenue.',
  },
];

const DedicatedExperts = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const animationFrame = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHovered) {
        x.set(x.get() - (delta * 0.1));
      }

      const containerWidth = containerRef.current?.scrollWidth / 2 || 0;
      if (Math.abs(x.get()) >= containerWidth) {
        x.set(0);
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isHovered, x]);

  return (
    <section className="pt-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div
        className="container py-4"
        style={{
          background: `linear-gradient(to bottom, rgba(13, 12, 12, 0.3) 0%, rgba(42, 40, 40, 0) 30%, rgba(31, 29, 29, 0) 70%, rgba(21, 18, 18, 0.3) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '40px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-5 text-center px-4 pt-4" style={{transform:"initial"}}
        >
          <h2 className="display-6 fw-bold text-white mb-3">
            AI Solutions for the Modern Newsroom
          </h2>
          <p className="text-white mx-auto">
            Ninestars brings AI into the newsroom not as a disruption, but as a
            tool to enhance editorial precision, unify workflows, and anticipate
            audience behaviour. Built on 26 years of industry expertise, our
            tools empower you to innovate confidently without compromising
            journalistic integrity.
          </p>
        </motion.div>

        <div
          className="overflow-hidden pb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={containerRef}
        >
          <motion.div
            className="d-flex gap-4"
            style={{ x, width: 'max-content' }}
          >
            {[...cards, ...cards].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-4 shadow-sm p-4 mx-2"
                style={{ maxWidth: '300px', minHeight: '250px', maxHeight: '350px' }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <h5 className="fw-bold mb-3">{card.title}</h5>
                <p className="text-muted">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MeetUsSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f2f2f2',
        flexWrap: 'wrap',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {/* Left: Image */}
      <div
        style={{
          flex: '0 0 45%',
          maxWidth: '500px',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={circleImage}
          alt="AOTM Platform Diagram"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '20px',
            display: 'block',
          }}
        />
      </div>

      {/* Right: Content */}
      <div
        style={{
          flex: '0 0 45%',
          maxWidth: '500px',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Meet us at WAN-IFRA!
        </h2>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#333' }}>
          Reimagine publishing with AI-powered automation and modular innovation.
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#333' }}>
          Backed by 26 years of digital transformation expertise at Ninestars, AOTM is a flexible,
          AI-native platform that empowers publishers to build tailored solutions—from editorial
          automation and metadata enrichment to intelligent archiving and licensing workflows. Break
          free from legacy systems and unlock efficiency at scale. 
          
         <div>Visit our booth to discover more. We are at Level 1, outside S1 Hall, near the Breakout area. </div> 
        </p>
        <button
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          BOOK A DEMO
        </button>
      </div>
    </section>
  );
};

export default DedicatedExperts;
export { MeetUsSection };