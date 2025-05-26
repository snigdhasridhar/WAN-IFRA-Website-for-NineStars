import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const OurWorks = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold"
        >
The Traditional Newsroom Wasn't Built for an AI World        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted"
        >
          See how we’ve helped businesses like yours overcome challenges,<br />
          improve engagement, and boost sales.
        </motion.p> */}
      </div>

      <div className="row align-items-center">
        {/* Left Info Section */}
        <motion.div
          className="col-md-4 mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3">
            {/* <img src="/path-to-logo.png" alt="Peregrin" height={24} className="me-2" /> */}
            <strong>For decades, newsrooms have operated in silos—each function optimized for a different media age:</strong>
          </div>
          {/* <span className="badge bg-light text-dark mb-3">Saas industry</span> */}
          <div>
            <h5>Print Production:</h5>
            <p className="text-muted">
            Legacy CMS tools still driving workflows designed for page layouts.            </p>
            <h5>Digital Platforms:</h5>
            <p className="text-muted">
            Separate systems managing web, app, and social output, often without alignment.            </p>
            <h5>Digital Platforms:</h5>
            <p className="text-muted">
            Separate systems managing web, app, and social output, often without alignment.            </p>
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="col-md-4 mb-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          minHeight="376px"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Professional working"
            className="img-fluid rounded"
            minHeight="376px"
          />
        </motion.div>

        {/* Right Testimonial Section */}
        <motion.div
          className="col-md-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="d-flex align-items-center mb-3"> */}
            {/* <img src="/user1.jpg" className="rounded-circle me-2" width="40" alt="User1" /> */}
            {/* <img src="/user2.jpg" className="rounded-circle me-3" width="40" alt="User2" /> */}
            <div className="mb-3">
            <strong>This fragmented infrastructure leads to:</strong>
            </div>
          {/* </div> */}
          <div>
            <h5>Challenge:</h5>
            <p className="text-muted">
              What issue they faced before using your service.
            </p>
            <h5>Solution:</h5>
            <p className="text-muted">
              How your service helped them (e.g., email automation, retention boost)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurWorks;