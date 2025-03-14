import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Handle hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    
    const mouseEnter = () => setCursorVariant('hover');
    const mouseLeave = () => setCursorVariant('default');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: 'rgba(255, 107, 107, 0.2)',
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 45,
      width: 45,
      backgroundColor: 'rgba(255, 107, 107, 0.3)',
    }
  };

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-50"
      animate={cursorVariant}
      variants={variants}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      style={{
        translateX: '-50%',
        translateY: '-50%'
      }}
    />
  );
};

export default CursorGlow;
