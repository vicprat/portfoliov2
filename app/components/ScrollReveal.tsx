'use client'
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ChildrenPros {
    delay?: number;
    children: React.ReactNode;
    className?: string
}
export function ScrollReveal({ children, delay, className }: ChildrenPros) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    );
};


