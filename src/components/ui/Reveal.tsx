import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const reduced = useReducedMotion();

  const initial = reduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? 32 : 0,
        x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
      };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
