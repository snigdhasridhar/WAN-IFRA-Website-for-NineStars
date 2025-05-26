import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Testimonial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  
  // Animation controls using useAnimation
  const controls = useAnimation();
  
  // Intersection Observer hook
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible'); // When the section is in view, start animation
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Please fill in your full name';
    }
    if (!formData.email) {
      newErrors.email = 'Please fill in your email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Please fill in your telephone number';
    }
    if (!formData.message) {
      newErrors.message = 'Please fill in your message';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formdata = new FormData();
        formdata.append("name", formData.name);
        formdata.append("email", formData.email);
        formdata.append("phoneNumber", formData.phone);
        formdata.append("query", formData.message);
  
        const response = await fetch("http://192.168.14.34:9000/submit", {
          method: "POST",
          body: formdata,
          redirect: "follow"
        });
  
        const result = await response.text();
  
        if (response.ok) {
          setAlertMessage('Form submitted successfully!');
          console.log("Server response:", result);
          // Optionally, clear the form:
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          console.error("Server error:", result);
          setAlertMessage('Something went wrong. Please try again later.');
        }
      } catch (error) {
        console.error("Network error:", error);
        setAlertMessage('Network error. Please check your connection.');
      }
    } else {
      setAlertMessage('Please fill out all required fields.');
    }
  };
  

  return (
    <section className="testimonial py-5" ref={ref}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-6 bg-dark text-white p-5"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 }
              }
            }}
          >
            <motion.h2
              className="display-6 fw-bold mb-4"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.3 }
                }
              }}
            >
              Future-Proof Your Newsroom with Ninestars' AI Innovation
            </motion.h2>
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.5 }
                }
              }}
              style={{
                fontSize: '16px',
                marginTop: '40px'
              }}
            >
              Shape the tools you need to stay ahead in a rapidly evolving media landscape. From deep research and hyper-personalized content to automated workflows and monetization strategies, we work with you to build the AI-driven newsroom of tomorrow.
            </motion.p>

            {/* Adding the link to the brochure */}
            <motion.p
  className="lead mt-3"
  initial={{ opacity: 0 }}
  animate={controls}
  variants={{
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.7 },
    }
  }}
>
  <motion.button 
    className="btn btn-white text-white p-2"
    whileHover={{ scale: 1.05 }}
    style={{ border: '1px solid #f37321', backgroundColor: '#f37321', borderRadius:"16px" }}
    onClick={() => window.open(process.env.PUBLIC_URL + '/New.pdf', '_blank')}
  >
    Download the Brochure
  </motion.button>
</motion.p>

          </motion.div>

          <motion.div
            className="col-lg-6 contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-container p-4 text-white">
              <h2></h2>
              <h3>Schedule a call today</h3>
              <p>
                Fill out the form below and our team will get in touch with you. 
              </p>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Contact"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                {alertMessage && <div className="alert alert-warning">{alertMessage}</div>}
                <motion.button
                  type="submit"
                  className="btn btn-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  // onClick={contactRequest}
                >
                  SUBMIT
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
