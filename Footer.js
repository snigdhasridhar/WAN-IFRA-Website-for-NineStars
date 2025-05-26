import React from 'react';
import { motion } from 'framer-motion';
// import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer  bg-light">
      <div className="container">
        { /*<div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={"/placeholder.svg"} alt="Aotm" height="30" className="mb-3" />
            </motion.div>
          </div>
          
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 col-sm-3">
                <motion.h6 
                  className="fw-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Designers
                </motion.h6>
                <motion.ul 
                  className="list-unstyled"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Find a designer</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Become a designer</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Portfolio</a></li>
                </motion.ul>
              </div>
              
              <div className="col-6 col-sm-3">
                <motion.h6 
                  className="fw-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Products
                </motion.h6>
                <motion.ul 
                  className="list-unstyled"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Furniture</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Decor</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Lighting</a></li>
                </motion.ul>
              </div>
              
              <div className="col-6 col-sm-3">
                <motion.h6 
                  className="fw-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Our Services
                </motion.h6>
                <motion.ul 
                  className="list-unstyled"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Design</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Consultation</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Photography</a></li>
                </motion.ul>
              </div>
              
              <div className="col-6 col-sm-3">
                <motion.h6 
                  className="fw-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Login
                </motion.h6>
                <motion.ul 
                  className="list-unstyled"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Sign in</a></li>
                  <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Register</a></li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div> */}
        
        <motion.div 
          className="text-center border-top pt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-muted small">© {new Date().getFullYear()} Ninestars Information Technologies Pvt Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;