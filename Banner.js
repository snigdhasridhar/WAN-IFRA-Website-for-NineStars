import React from 'react';
import { motion } from 'framer-motion';
import ChicagoTribune from '../assets/ChicagoTribune.png';
import GulfNews from '../assets/gulfnews (1).png';
import NationalLibraryLuxembourg from '../assets/National Library of Luxembourg.png';
import SouthChinaMorningPost from '../assets/South china morning post.png';
import TimesOfIndia from '../assets/Times-of-India-logo-b.png';
import TheHindu from '../assets/the-hindu-logo.png';
import BSLogo from '../assets/BS.png';
import HindustanTimesLogo from '../assets/Hindustan_Times_logo.png';
import ProquestLogo from '../assets/Proquest.png';

export default function ProfessionalBanner() {
    return (
        <div style={styles.container}>
            {/* Scrolling Ribbon with Logos */}
            <div style={styles.scrollingRibbonWrapper}>
                <motion.div
                    style={styles.scrollingRibbon}
                    animate={{ x: ['100%', '-100%'] }} // Ensures the ribbon scrolls cyclically
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop', // Cyclic scrolling
                        duration: 20, // Increased duration for slower scrolling
                        ease: 'linear',
                    }}
                >
                    {/* Added all logos including Google */}
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        style={styles.logo}
                    />
                    <img
                        src={ChicagoTribune}
                        alt="Chicago Tribune"
                        style={styles.logo}
                    />
                    <img
                        src={GulfNews}
                        alt="Gulf News"
                        style={styles.logo}
                    />
                    <img
                        src={NationalLibraryLuxembourg}
                        alt="National Library of Luxembourg"
                        style={styles.logo}
                    />
                    <img
                        src={SouthChinaMorningPost}
                        alt="South China Morning Post"
                        style={styles.logo}
                    />
                    <img
                        src={TimesOfIndia}
                        alt="Times of India"
                        style={styles.logo}
                    />
                    <img
                        src={TheHindu}
                        alt="The Hindu"
                        style={styles.logo}
                    />
                    <img
                        src={BSLogo}
                        alt="BS Logo"
                        style={styles.logo}
                    />
                    <img
                        src={HindustanTimesLogo}
                        alt="Hindustan Times Logo"
                        style={styles.logo}
                    />
                    <img
                        src={ProquestLogo}
                        alt="Proquest Logo"
                        style={styles.logo}
                    />
                </motion.div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        fontFamily: 'Segoe UI, sans-serif'
    },
    scrollingRibbonWrapper: {
        width: '100%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: '1rem 0'
    },
    scrollingRibbon: {
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        whiteSpace: 'nowrap'
    },
    logo: {
        height: '30px',
        objectFit: 'contain'
    }
};
