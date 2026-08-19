import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function Overlay() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 style={{ margin: 0, fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px' }}>
          Aditya Jha
        </h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '1.2rem', color: '#888', fontWeight: 300 }}>
          Interactive 3D Portfolio
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '12px 24px',
          borderRadius: '100px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <MousePointer2 size={20} color="#ccc" />
        <span style={{ color: '#ccc', fontWeight: 300, letterSpacing: '1px' }}>
          Select a project to enter
        </span>
      </motion.div>
    </div>
  );
}
