import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.3 });

  useEffect(() => {
    const mouseMove = (e) => {
      x.set(e.clientX - 20);
      y.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="hidden md:block w-[40px] h-[40px] rounded-full border border-[#00d8ff] fixed z-[999] pointer-events-none will-change-transform"
      style={{ x: smoothX, y: smoothY }}
    ></motion.div>
  );
};

export default Cursor;
