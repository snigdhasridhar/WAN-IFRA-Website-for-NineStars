import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import workflowImage from '../assets/img-2.png'; 

const stats = [
  { value: 'Redundant Workflows', content: 'Content recreated across platforms instead of intelligently adapted.' },
  { value: 'Data Silos', content:"Insights trapped in tools that don't talk to each other."},
  { value: 'Delayed Decision-Making', content: 'Editors forced to react instead of predict.' },
];

const DesignSpaces = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState(null); // Track which section is open

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      style={{
        padding: '3rem 4rem',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Image */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <img
          src={workflowImage}
          alt="Newsroom Workflow"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          }}
        />
      </div>

      {/* Right Text */}
      <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
            The Traditional Newsroom Wasn't Built for an AI World
          </h2>
          <p style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>
            For decades, newsrooms have operated in silos—each function optimized for a different media age.
          </p>
        </div>

        <div>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              style={{
                padding: '1rem 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <div
                onClick={() => toggleContent(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: 'grey', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '1.5rem', color: 'grey' }}>
                  {openIndex === idx ? '-' : '+'}
                </span>
              </div>
              {openIndex === idx && (
                <div style={{ marginTop: '0.5rem', color: '#555', fontSize: '0.9rem' }}>
                  {stat.content}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSpaces;
