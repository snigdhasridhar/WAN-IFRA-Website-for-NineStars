import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section
			className="hero-section position-relative"
			style={{
				backgroundColor: '#F8F5F1',
				minHeight: '100vh',
				overflow: 'hidden',
			}}
		>
			{/* Background Video */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="position-absolute w-100 h-100"
				style={{
					objectFit: 'cover',
					top: 0,
					left: 0,
					zIndex: 0,
				}}
			>
				<source src="Futuristic_Globe_Technology.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Centered Content */}
			<div
				className="position-relative d-flex justify-content-center align-items-center text-center"
				style={{
					zIndex: 1,
					height: '100vh',
					width: '100vw',
					color: '#ffffff',
					padding: 0,
					margin: 0,
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					style={{
						maxWidth: '850px',
						padding: '1rem',
					}}
				>
					<h1 className="display-4 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
					<br />
						<span style={{ color: '#f37321' }}>Let’s reimagine all that a digital newsroom can be

</span>
					</h1>

					{/* <h5 className="mb-4">
						Innovation and automation built for the modern newsroom—with Ninestars.
					</h5> */}

					<p className="lead">
					For an audience immersed in an AI-driven world—watching news on X, finding context in Reddit, and prompting views on ChatGPT—newsrooms must meet them where they are.

We help newsrooms build and scale AI capabilities, right from research to automating processes and serve a segment of one.						<div className='fw-bold' style={{color:"#f37321"}}> AI capabilities to power digital newsrooms.</div>
					</p>
					
					<motion.a
						href="#get-started"
						className="btn text-white px-4 py-2 mt-3"
						style={{
							borderRadius: '8px',
							backgroundColor: '#f37321',
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Start with a demo
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
