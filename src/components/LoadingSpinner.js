import React from 'react';
import { motion } from 'framer-motion';
import loadingImage from '../assets/images/B_BURST①ホワイト.png';

function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: 'white' }}
      animate={{ opacity: 1, backgroundColor: 'black' }}
      transition={{ duration: 5 }}  
      style={styles.background}
    >
      <img src={loadingImage} alt="Loading..." style={styles.image} />
    </motion.div>
  );
}

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '25wh',
    height: '20wh',
  }
}

export default LoadingSpinner;